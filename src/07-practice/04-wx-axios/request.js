import axios from './wx-axios/axios';

/** @param {string} msg */
function handleError(msg) {
  console.error(msg);
}

/**
 * @typedef {(result:any) => string} ResultValidator 返回数据结果检查器,检查不通过自动走错误流程。
 * @typedef {Object} CustomRequestConfig
 * @property {boolean} [handleError=true] 是否自动处理错误，默认`true`
 * @property {boolean} [showLoading=true] 是否显示loading状态，默认`false`
 * @property {string} [loadingMsg] loading状态的文字内容
 * @property {boolean} [log] 记录请求日志，关闭时不记录成功日志，默认`false`
 * @property {boolean | ResultValidator} [resultValidator=true] 返回数据结果检查器,检查不通过自动走错误流程。
 */

const service =
  /** @type {import('./wx-axios/axios').AxiosCreator<CustomRequestConfig, { data: any}>} */ (
    axios.create
  )({
    baseURL: '',
    timeout: 6 * 1000,
    handleError: true,
    showLoading: false,
    loadingMsg: '',
    log: false,
    resultValidator: undefined,
  });

service.interceptors.request.use((config) => {
  if (config.showLoading) {
    wx.showLoading({
      title: config.loadingMsg || '加载中...',
      mask: true,
    });
  }

  return config;
});

service.interceptors.response.use(
  (response) => {
    const { config, data } = response;
    if (config.showLoading) {
      wx.hideLoading();
    }
    // ...
    return data;
  },
  (reason) => {
    if (reason.config.showLoading) {
      wx.hideLoading();
    }
    handleError('网络连接异常，请检查网络');
    return Promise.reject(reason);
  }
);

export default service;
