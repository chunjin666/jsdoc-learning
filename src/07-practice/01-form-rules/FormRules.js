/**
 * @callback Validator
 * @param {RuleItem} rule 校验规则
 * @param {any} value 字段值
 * @param {any} param 校验参数
 * @param {Record<string, any>} models form组件的models属性
 */

/**
 * @typedef {Object} RuleItem
 * @property {string} [message] 检验失败时候提示的文字
 * @property {Validator} [validator] 自定义校验函数
 * @property {RegExp|string} [pattern] 校验正则表达式，使用FormRules方法包装时支持RegExp格式，直接设置时请使用 toString 转换为字符串（小程序组件属性不支持直接传递RegExp类型数据）
 * @property {string} [required]  是否必填：该字段优先级最高；设置为 false 表示非必填，内容为空时会跳过其他校验；设置为 true 或者字段名称时表示必填，校验失败会提示"{字段名称}必填"；
 * @property {number} [minlength]  最小长度
 * @property {number} [maxlength]  最大长度
 * @property {[number, number]} [lengthrange] 长度范围
 * @property {number} [bytelength] 字节长度
 * @property {[number, number]} [range] 数值范围
 * @property {number} [min] 最小值
 * @property {number} [max] 最大值
 * @property {string | boolean} [mobile]  是否是手机号: 内容可填字段中文名称
 * @property {string | boolean} [email]  是否是邮箱地址: 内容可填字段中文名称
 * @property {string | boolean} [url]  是否是url: 内容可填字段中文名称
 * @property {string | [string, string]} [equalTo]  相等字段key，及字段中文名称
 */

/**
 * @typedef {Record<string, RuleItem | RuleItem[]>} Rules
 */

/**
 * 
 * @param {RuleItem} ruleItem 
 * @returns {RuleItem}
 */
function formatRuleItem(ruleItem) {
  if (ruleItem && ruleItem.pattern instanceof RegExp) {
    // 由于小程序属性不支持RegExp，所以需要转化为字符串
    ruleItem.pattern = ruleItem.pattern.toString()
  }
  return ruleItem
}

/**
 * 创建form校验规则，实际上啥也没做，只是为了有代码提示。。
 * 
 * 实际上后面加上了对于正则表达式的处理。
 *
 * 如果使用 `VSCode` 编辑器，使用 `Ctrl+I` 键会弹出提示
 * @param {Rules} rules 规则选项
 * @returns
 */
export default function FormRules(rules) {
  Object.values(rules).forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((ruleItem) => formatRuleItem(ruleItem))
    } else if (value && typeof value === 'object') {
      formatRuleItem(value)
    }
  })
  return rules
}
