
enum EnvTypes {
  DEV = 'DEV',
  STAGING = 'STAGING',
  PROD = 'PROD',
}

// 前一个 EnvTypes 是作为类型来使用，等同于 'DEV' | 'STAGING' | 'PROD'
// 后一个 EnvTypes 是作为变量来使用
let currentEnv: EnvTypes = EnvTypes.DEV
