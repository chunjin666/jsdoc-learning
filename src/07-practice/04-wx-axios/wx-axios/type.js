/**
 * 是否是 `null` 或者 `undefined`
 * @param {any} value
 */
export function isNil(value) {
  return value == null;
}

/**
 * Object.prototype.toString
 */
export const objectToString = Object.prototype.toString;

/**
 *
 * @param {any} value
 * @returns {string}
 */
export function getRawType(value) {
  return objectToString.call(value).slice(8, -1);
}

/**
 * 判断对象的原始类型
 * @param {any} value
 * @param {string} type
 */
export function isRawType(value, type) {
  if (typeof value !== 'object') return false;
  return getRawType(value) === type;
}
