/**
 * 返回一个防抖函数：调用wait毫秒后执行函数，wait毫秒之内有调用重新计时
 * @template {Function} T
 * @param {T} func 函数
 * @param {number} [wait=0] 延迟执行毫秒数
 * @param {boolean} [immediate=false] true 表立即执行，false 表非立即执行
 * @returns {T} 返回一个延迟执行函数
 */
export default function debounce(func, wait = 0, immediate = false) {
  /** @type {any} */
  let timeout;
  // @ts-ignore
  return function () {
    // @ts-ignore
    const context = this;
    const args = Array.from(arguments);
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
        timeout = null;
      }, wait);
    }
  };
}
