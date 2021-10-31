/*
`@param`和`@returns`用来描述一个函数的参数和返回值
*/

// 参数可以用多种语法格式来书写
/**
 * @param {string}  p1 - 一个string类型参数.
 * @param {string=} p2 - 一个可选的参数 (Google Closure syntax)
 * @param {string} [p3] - 另一个可选参数 (JSDoc syntax).
 * @param {string} [p4="test"] - 有默认值的可选参数
 * @returns {string} 返回值
 */
function stringsStringStrings(p1, p2, p3, p4) {
  return p1 + p2 + p3 + p4
}


// @return 也可以用来定义返回值类型
/**
 * @return {PromiseLike<string>} Bad
 */
function ps() {
  return new Promise((resolve) => resolve('ok'))
}

/**
 * @returns {{ a: string, b: number }} - 注意是 '@returns' 尽量不要用 '@return'
 */
function ab() {
  return { a: 'a', b: 2 }
}

// ---------------------------------------------------------------------------- rest params
// 可以通过下面这种写法声明不定参数列表
/** @param {...number} args */
function sumOf() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
