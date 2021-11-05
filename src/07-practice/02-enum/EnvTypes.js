/**
 * 环境变量: production 线上，pre 预发布，staging 测试，develop 开发
 * @enum {'develop' | 'staging' | 'pre' | 'production'}
 */
const EnvTypes = {
  /**
   * 开发环境
   * @type {'develop'}
   */
  DEV: 'develop',
  /**
   * 测试环境
   * @type {'staging'}
   */
  STAGING: 'staging',
  /**
   * 预发布环境
   * @type {'pre'}
   */
  PRE: 'pre',
  /**
   * 生产环境
   * @type {'production'}
   */
  PROD: 'production',
};

export default EnvTypes;
