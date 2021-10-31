// ------------------------------------------------------------------------------@typedef
// @typedef 和 @param 写法很相似
// @typedef 定义的类型可以多处使用
/**
 * @typedef {Object} SpecialType - 创建一个类型名为 'SpecialType'
 * @property {string} prop1 - SpecialType 的一个 string 类型属性
 * @property {number} prop2 - SpecialType 的一个 number 类型属性
 * @property {number=} prop3 - SpecialType 的一个可选 number 类型属性
 * @prop {number} [prop4] - SpecialType 的一个可选 number 类型属性
 * @prop {number} [prop5=42] - SpecialType 的一个有默认值的可选 number 类型属性
 */

/**
 * @param {SpecialType} value
 */
function doSomethingWithSpecialType(value) {
  console.log(value.prop3)
}

// 第一行也可以用 `object` (o小写)，不过个人一般使用 `Object`（遵循TypeScript习惯）
/**
 * @typedef {object} SpecialType1 - 创建一个类型名为 'SpecialType'
 * @property {string} prop1 - SpecialType 的一个 string 类型属性
 * @property {number} prop2 - SpecialType 的一个 number 类型属性
 * @property {number=} prop3 - SpecialType 的一个可选 number 类型属性
 */

/** @type {SpecialType1} */
var specialTypeObject1

// ------------------------------------------------------------------------------@callback
// @callback 和 @typedef 也比较相似，不过它是用来定义一个 function 类型的。
/**
 * @callback Predicate
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */

/** @type {Predicate} */
const ok = (s, n) => !(s.length % (n || 2))
ok('dddd', 3)

// 另外，上面这些其实都可以通过 @typedef 在一行里面写完
/** @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialType2 */
/** @type { SpecialType2 } */
let sp2 = {
  prop1: 'hello',
  prop2: 'world',
}

/** @typedef {(data: string, index?: number) => boolean} Predicate1 */
/** @type { Predicate1 } */
let pd1 = (data, index) => !(data.length % (index || 2))
pd1('dddd', 3)

// ------------------------------------------------------------------------------@param
// 当参数是一个对象的时候，也可以使用类似 @typedef 的语法来写
/**
 * @param {Object} options - 格式和上面的 SpecialType 差不多
 * @param {string} options.prop1 - options 的一个 string 类型属性
 * @param {number} options.prop2 - options 的一个 number 类型属性
 * @param {number=} options.prop3 - options 的一个可选 number 类型属性
 * @param {number} [options.prop4] - options 的一个可选 number 类型属性
 * @param {number} [options.prop5=42] - options 的一个有默认值的可选 number 类型属性
 */
function special(options) {
  return (options.prop4 || 1001) + (options.prop5 || 0)
}
special({
  prop1: 'hello',
  prop2: 1,
})
