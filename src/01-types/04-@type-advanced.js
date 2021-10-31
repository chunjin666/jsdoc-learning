// ----------------------------------------------------- Casts （类型投影？类型转换?）
// 在小括号括起来的表达式前面添加类型注释

/**
 * @type {number | string}
 */
var numberOrString = Math.random() < 0.5 ? 'hello' : 100
var typeAssertedNumber = /** @type {number} */ (numberOrString)

// 可以像 TypeScript 一样投影成一个const类型，文档上有，但是 VS Code 目前还没支持？
// @ts-ignore
let one = /** @type {const} */ (1)
// @ts-ignore
let oneStr = /** @type {const} */ ('1')

// ----------------------------------------------------- typeof
// 当某个值的类型比较复杂写起来比较麻烦时可以用`typeof`来获取其类型。

const userAccountDefault = {
  id: 1,
  username: 'name1',
  account: 'account',
  age: 18,
  isLogin: false,
}

/**
 *
 * @param {typeof userAccountDefault } account
 */
export function setAccount(account) {
  // TODO
}
