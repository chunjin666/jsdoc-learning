/**
 * @template FulfilledData, RejectedData
 */
class InterceptorManager {
  /**
   * @typedef {(config: FulfilledData) => void} Fulfilled
   * @typedef {(reason: RejectedData) => void} Rejected
   * @typedef {{ fulfilled?: Fulfilled, rejected?: Rejected}} HandlerItem
   */
  /**
   * @type {(HandlerItem |  null)[]}
   */
  handlers = [];
  /**
   * 添加interceptor
   * @param {Fulfilled=} fulfilled Promise 的 then 回调方法
   * @param {Rejected=} rejected Promise 的 reject 回调方法
   * @returns {Number} 返回移除时的ID参数
   */
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected,
    });
    return this.handlers.length - 1;
  }
  /**
   * 删除添加的interceptor
   * @param {Number} id use 返回的ID
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * 遍历handler中的记录作为参数执行回调 fn
   * @param {Function} fn
   */
  forEachInterceptor(fn) {
    this.handlers.forEach((record) => {
      if (record !== null) {
        fn(record);
      }
    });
  }
}

export default InterceptorManager;
