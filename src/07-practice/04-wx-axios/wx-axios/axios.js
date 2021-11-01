import WxAxios from './core/WxAxios'
import utils from './utils'
import deepClone from './deepClone'
import { defaults } from './defaults'

/**
 * @param {Partial<import("./core/WxAxios").RequestConfig<{ transformRequest: never[]; transformResponse: never[]; header: {}; }>>} c1
 * @param {any} c2
 */
function mergeConfig(c1, c2) {
  return Object.assign(deepClone(c1), c2)
}

/**
 * @template {{}} TExtraOptions, TResponseData
 * @typedef {(defaultConfig: Partial<import('./core/WxAxios').RequestAllConfig<TExtraOptions>>) => WxAxios<TExtraOptions, TResponseData> & WxAxios<TExtraOptions, TResponseData>['request'] & { create: AxiosCreator<TExtraOptions, TResponseData>}} AxiosCreator
 */

/**
 * @template {{}} TExtraOptions
 * @template {{}} TResponseData
 * @type {AxiosCreator<TExtraOptions, TResponseData>}
 */
function createInstance(defaultConfig) {
  // @ts-ignore
  const context = new WxAxios(defaultConfig)
  const instance = utils.bind(WxAxios.prototype.request, context)

  // Copy axios.prototype to instance
  utils.extendFunctionsFromProto(instance, WxAxios.prototype, context)

  // Copy context to instance
  utils.extendProps(instance, context)

  // @ts-ignore
  return instance
}

// Create the default instance to be exported
const axios = createInstance(defaults)


// Factory for creating new instances
/**
 * @template {{}} TExtraOptions, TResponseData
 * @type {AxiosCreator<TExtraOptions, TResponseData>}
 */
function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig))
}

// Expose Cancel & CancelToken
// axios.Cancel = require('./cancel/Cancel')
// axios.CancelToken = require('./cancel/CancelToken')
// axios.isCancel = require('./cancel/isCancel')

/**
 * @param {readonly [any, any, any, any, any, any, any, any, any, any]} promises
 */
function all(promises) {
  return Promise.all(promises)
}

export default {
  ...axios,
  // Expose Axios class to allow class inheritance
  // axios.Axios = WxAxios
  Axios: WxAxios,
  create,
  all,
}
