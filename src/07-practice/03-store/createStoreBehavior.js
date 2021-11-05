import { autorun } from 'mobx-miniprogram';
import { clonePartial } from './clonePartial';
import debounce from './debounce';

/**
 * @typedef {Object} StoreOptions
 * @property {string} [key] 在防止多个behavior属性或者action冲突时使用。表示把添加的属性或者action挂载到Behavior中key对应的对象上
 * @property {string[]} [props] 要映射到data中的属性名列表，不设置为全部映射
 * @property {string[]} [actions] 要映射到behavior中的action名列表，不设置为全部映射
 * @property {boolean} [deep] 是否深度追踪变化，默认为true
 * @property {number} [delay] 表示延迟更新setData的毫秒数
 */

/**
 * @type {StoreOptions}
 */
const defaultStoreOptions = {
  deep: true,
  delay: 0,
};

/**
 * @typedef {WechatMiniprogram.Page.Instance<Record<PropertyKey, any>, Record<PropertyKey, any>> | WechatMiniprogram.Component.Instance<Record<PropertyKey, any>, Record<PropertyKey, any>, Record<PropertyKey, any>>} PageOrComponentInstance
 *
 * @typedef {WechatMiniprogram.Page.Options<Record<PropertyKey, any>, Record<PropertyKey, any>> | WechatMiniprogram.Component.Options<Record<PropertyKey, any>, Record<PropertyKey, any>, Record<PropertyKey, any>>} PageOrComponentOptions
 */

/**
 * 通过 `store` 创建一个 `Behavior` ，把 `store` 的属性映射到 `data` 上， `action` 映射到实例对象上。如果需要使用多个 `store` 的话可以创建多个 `Behavior`
 * @param {import('mobx-miniprogram').IObservableObject} store mobx observale 数据
 * @param {StoreOptions} [storeOptions] 设置store的选项。
 *
 * - `key`: 在防止多个behavior属性或者action冲突时使用。表示把添加的属性或者action挂载到Behavior中key对应的对象上
 *
 * - `props`：要映射到data中的属性名列表，不设置为全部映射
 *
 * - `actions`：要映射到behavior中的action名列表，不设置为全部映射
 *
 * - `deep`: 是否深度追踪变化，默认为true
 *
 * - `delay`: 表示延迟更新setData的毫秒数
 * @this {PageOrComponentInstance}
 */
export default function createStoreBehavior(
  store,
  storeOptions = defaultStoreOptions
) {
  const keys = Object.getOwnPropertyNames(store);
  storeOptions = Object.assign({}, defaultStoreOptions, storeOptions);
  const {
    key: storeKey,
    props,
    actions,
    deep = true,
    delay = 0,
  } = storeOptions;

  /**
   * @type {PageOrComponentOptions}
   */
  const behaviorOptions = { methods: {}, lifetimes: {} };
  const { methods, lifetimes } = behaviorOptions;
  const excludeKeys = ['$mobx'];
  /** @type {PropertyKey[]} */
  const mapProps = [];
  // const mapActions = []
  keys
    .filter((key) => !excludeKeys.includes(key))
    .forEach((key) => {
      // @ts-ignore
      const value = store[key];
      if (typeof value === 'function') {
        if (actions && !actions.includes(key)) return;
        const methodKey = storeKey ? `${storeKey}.${key}` : key;
        methods[methodKey] = value.bind(store);
        // mapActions.push(methodKey)
      } else {
        if (props && !props.includes(key)) return;
        mapProps.push(key);
      }
    });

  /** @type {Function[]} */
  const disposes = [];
  /** @this {PageOrComponentInstance} */
  function attached() {
    const lazySetData = debounce(this.setData.bind(this), delay);
    let dataInitialized = false;
    disposes.push(
      autorun(() => {
        if (deep) {
          // 追踪数据深度变化
          // @ts-ignore
          mapProps.forEach((p) => JSON.stringify(store[p]));
        }
        let dataObj = clonePartial(store, mapProps);
        storeKey && (dataObj = { [storeKey]: dataObj });
        if (!dataInitialized) {
          dataInitialized = true;
          this.setData(dataObj);
        } else {
          lazySetData(dataObj);
        }
        // console.log('store behavior setData', dataObj)
      })
    );
  }
  /** @this {PageOrComponentInstance} */
  function detached() {
    disposes.forEach((dispose) => dispose());
  }
  lifetimes.attached = attached;
  lifetimes.detached = detached;

  return Behavior(behaviorOptions);
}
