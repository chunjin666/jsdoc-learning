let anyVal

// ------------------------------------------------------------------------------原始类型 primitive types

/**
 * @type {string}
 */
let str
str = '1,2,3'
str.split(',')

/**
 * @type {number}
 */
let num
num = 12.345
num.toFixed(2)

/**
 * @type {boolean}
 */
let boo
// ...
console.log(boo ? 'success' : 'failure')

/**
 * @type {symbol}
 */
let syb

// ------------------------------------------------------------------------------联合类型 union type
/**
 * @type { string | boolean }
 */
var sb

// ------------------------------------------------------------------------------数组类型
// 有两种写法，推荐使用第一种，写起来方便
/**
 * @type {number[]}
 */
let numArray1
numArray1 = [1, 2, 3]
console.log(numArray1.length)
/**
 * @type {Array<number>}
 */
let numArray2
numArray2 = numArray1
console.log(numArray2.join(''))

// ------------------------------------------------------------------------------自定义对象类型
/**
 * @type {{a: string, b: number}}
 */
let someObj
someObj = { a: 'test', b: 1 }
someObj.a

// 定义一个类似`Map`的对象
// 以下3种写法等价，推荐使用第二、三种（与 TypeScript 中写法趋同）
/**
 * @type {Object<string, number>}
 */
let mapLike1
mapLike1['payed'] = 3
/**
 * @type {Record<string, number>}
 */
let mapLike2
mapLike2['payed'] = 3
/**
 * @type {{ [k: string]: number}}
 */
let mapLike3
mapLike3['payed'] = 3


// 还支持这种写法， 不过那么麻烦干嘛，TypeScript 也不支持这种写法
/** @type {Object.<string, number>} */
let mapLike4

// 定义一个类似`Array`的对象
// 以下2种写法等价
/**
 * @type {Record<number, any>}
 */
let arrayLike1
/**
 * @type {{[k: number]: any}}
 */
let arrayLike2

// ------------------------------------------------------------------------------运行环境自带类型
/**
 * @type {Window}
 */
let win
win.document.createElement('div')

/**
 * @type {Date}
 */
let date
date.getFullYear()

/** @type {PromiseLike<string>} */
var promisedString

// ------------------------------------------------------------------------------函数类型
// 支持下面2种写法
/**
 * @type {function(string, boolean): number} 闭包语法(Closure)
 */
let fun1
/**
 * @type {(s: string, b: boolean) => number} TypeScript语法
 */
let fun2

// 或者使用笼统的 `Function` 类型
/** @type {Function} */
let fun3

// ------------------------------------------------------------------------------TypeScript 中的类型/工具类型
// 除了上面使用过的 Record PromiseLike外，还有其他非常多 TypeScrip 中的类型、工具类型、写法都可以使用

/**
 * @type {PropertyKey} 等于 string | number | symbol
 */
let key

/**
 * @typedef {{ a: number , b: string}} OriginalObject
 */
/**
 * @type {Partial<OriginalObject>}
 */
let partialObj

let str1 = 'test'
/**
 * @type {typeof str1}
 */
let willBeString
