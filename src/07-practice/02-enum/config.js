import EnvTypes from './EnvTypes'
import ServerTypes from './ServerTypes'

/**
 * 配置不同环境下，不同服务器的API地址
 * @type {Record<EnvTypes, Record<ServerTypes, string>>}
 */
const BaseURLConfig = {
  [EnvTypes.DEV]: {
    [ServerTypes.DEFAULT]: 'https://dev.example.com/default/v1/',
    [ServerTypes.USER]: 'https://dev.example.golden.com/user/v1/',
    [ServerTypes.ORDER]: 'https://dev.example.golden.com/order/v1/',
  },
  [EnvTypes.STAGING]: {
    [ServerTypes.DEFAULT]: 'https://staging.example.com/default/v1/',
    [ServerTypes.USER]: 'https://staging.example.golden.com/user/v1/',
    [ServerTypes.ORDER]: 'https://staging.example.golden.com/order/v1/',
  },
  [EnvTypes.PRE]: {
    [ServerTypes.DEFAULT]: 'https://pre.example.com/default/v1/',
    [ServerTypes.USER]: 'https://pre.example.golden.com/user/v1/',
    [ServerTypes.ORDER]: 'https://pre.example.golden.com/order/v1/',
  },
  [EnvTypes.PROD]: {
    [ServerTypes.DEFAULT]: 'https://www.example.com/default/v1/',
    [ServerTypes.USER]: 'https://www.example.golden.com/user/v1/',
    [ServerTypes.ORDER]: 'https://www.example.golden.com/order/v1/',
  },
}

/** @type {EnvTypes} */
let env = EnvTypes.PROD

/**
 * 设置当前环境
 * @param {EnvTypes} $env 当前环境
 */
export function setEnv($env) {
  env = $env
}

/**
 * @returns {EnvTypes}
 */
export function getEnv() {
  return env
}

/**
 * 获取接口路径
 * @param {ServerTypes} [serverType=ServerTypes.DEFAULT]
 */
export function getBaseURL(serverType = ServerTypes.DEFAULT) {
  return BaseURLConfig[env][serverType]
}
