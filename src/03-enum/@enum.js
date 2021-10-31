// @enum 可以在 JavaScript 中近似的使用 TypeScript 中的 enum 功能。标记为枚举后，这个常量名可以当成类型来使用。

/** @enum {number} */
const OrderState = {
  NotPaid: 0,
  Paid: 1,
  Failure: 2,
}

/**
 *
 * @param {OrderState} state
 */
function checkOrderState(state) {
  switch (state) {
    case OrderState.NotPaid:
      // ...
      break
    case OrderState.Paid:
      // ...
      break
    case OrderState.Failure:
      // ...
      break
    // default:
    //   throw Error("invalid state")
  }
}

checkOrderState(OrderState.NotPaid) // Ok

// ------------------------------------------------------------------------------
// 还可以把枚举类型写成更精确的联合类型，

/**
 * @enum {'development' | 'staging' | 'production'}
 */
const EnvTypes = {
  /** @type {'development'} */
  Development: "development",
  /** @type {'staging'} */
  Staging: "staging",
  /** @type {'production'} */
  Production: "production",
}

/**
 * @type {Record<EnvTypes, {baseURL: string, title?: string}>}
 */
const AppConfig = {
  [EnvTypes.Development]: { baseURL: '/dev', title: 'xxx' },
  [EnvTypes.Staging]: { baseURL: '/stage', title: 'yyy' },
  [EnvTypes.Production]: { baseURL: '/prod', title: 'zzz' },
}

/** @type {EnvTypes} */
let env

// 这里能正确推断出返回值的类型
function getAppConfig() {
  return AppConfig[env]
}
