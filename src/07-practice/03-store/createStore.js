import { observable, action } from 'mobx-miniprogram';

/**
 * 判断是否是对象类型
 * @param {unknown} value
 */
export function isObject(value) {
  return value !== null && typeof value === 'object';
}

/**
 * 提取mobx observable第2个参数的decorators，把function全部变为action
 * @template {Record<string, any>} T
 * @param {T} srcObj 原始对象
 * @returns {{[K in keyof T]: Function}}
 */
function extractDecorators(srcObj) {
  // @ts-ignore
  return Object.keys(srcObj).reduce((pre, key) => {
    const descriptor = Object.getOwnPropertyDescriptor(srcObj, key);
    if (descriptor && typeof descriptor.value === 'function') {
      // @ts-ignore
      pre[key] = action;
    }
    return pre;
  }, {});
}

/**
 * 创建store
 * @template T
 * @param {T} value 要转换成Store的对象
 * @returns {T & import('mobx-miniprogram').IObservableObject}
 * @example
 * const storeA = createStore({
 *    name: 'default name',
 *    setName(value) {
 *        this.name = value
 *    },
 * })
 * console.log(storeA.name)
 * storeA.setName('new name')
 */
export default function createStore(value) {
  if (!isObject(value)) throw Error('value must be object');
  return observable(value, extractDecorators(value));
}
