// ----------------------------------------------------- @constructor
// @constructor 用来标记一个函数是构造函数，如果使用的时候不是用 new 来使用会提示错误。
/**
 * @constructor
 * @param {number} data
 */
function C(data) {
  // 属性类型会被自动推断
  this.name = 'foo'

  // 可以明确设置类型
  /** @type {string | null} */
  this.title = null

  // 如果值在其他地方被设置了，可以简单的注释一下
  /** @type {number} */
  this.size

  this.initialize(data)
  // 类型“number”的参数不能赋给类型“string”的参数。
}

/**
 * @param {string} s
 */
C.prototype.initialize = function (s) {
  this.size = s.length
}

var c1 = new C(0)
c1.size

var result = C(1)
// 类型“typeof C”的值不可调用。是否希望包括 "new"?

// 添加 @constructor 之后，可以检查到构造函数 `C` 中的 `this`的类型，所以调用 initialize 方法的时候传入不符合的 number 类型参数会提示错误，而且当你调用 C 的时候没有加 new 也会提示错误。
