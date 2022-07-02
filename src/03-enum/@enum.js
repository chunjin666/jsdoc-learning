// @enum 可以在 JavaScript 中近似的使用 TypeScript 中的 enum 功能。标记为枚举后，这个常量名可以当成类型来使用。

/** @enum {number} */
const OrderState = {
  NotPaid: 0,
  Paid: 1,
  Failure: 2,
};

/**
 *
 * @param {OrderState} state
 */
function checkOrderState(state) {
  switch (state) {
    case OrderState.NotPaid:
      // ...
      break;
    case OrderState.Paid:
      // ...
      break;
    case OrderState.Failure:
      // ...
      break;
    // default:
    //   throw Error("invalid state")
  }
}

checkOrderState(OrderState.NotPaid); // Ok

// ------------------------------------------------------------------------------
// 还可以把枚举类型写成更精确的联合类型，

/**
 * @enum {ValueOf<typeof EnvTypes>}
 */
const EnvTypes = Object.freeze({
  DEV: 'DEV',
  STAGING: 'STAGING',
  PROD: 'PROD',
});

/**
 * @type {Record<EnvTypes, {baseURL: string, title?: string}>}
 */
const AppConfig = {
  [EnvTypes.DEV]: { baseURL: '/dev', title: 'xxx' },
  [EnvTypes.STAGING]: { baseURL: '/stage', title: 'yyy' },
  [EnvTypes.PROD]: { baseURL: '/prod', title: 'zzz' },
};

/** @type {EnvTypes} */
let env;

// 这里能正确推断出返回值的类型
function getAppConfig() {
  return AppConfig[env];
}


// ------------------------------------------------------------------------------
// 使用 JSDOc 也能实现类型推断，定义一个工具类型

/**
 * @template T
 * @template {keyof T} [K= keyof T]
 * @typedef {K extends K ? T[K] : never} ValueOf2
 */

/**
 * @enum {ValueOf2<typeof EnvTypes>}
 */
 const EnvTypes2 = Object.freeze({
  DEV: 'DEV',
  STAGING: 'STAGING',
  PROD: 'PROD',
});

export default {};
