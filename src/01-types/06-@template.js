// 可以使用 @template 标签声明一个类型参数，这可以让 函数、类、类型变为泛型

/**
 * @template T
 * @param {T} x - 一个流转到返回类型的泛型参数
 * @return {T}
 */
function id(x) {
  return x
}

const ta = id('string')
const tb = id(123)
const tc = id({})

// 可以使用多个标签声明多个类型参数
/**
 * @template T,U,V
 * @template W,X
 */

// 可以在类型参数名前指定一个类型限制
/**
 * @template {string} K - 必须是一个字符串或者字符字面量
 * @template {{ execute(s: string): string }} Executable - 必须有一个 execute 函数，参数和返回值为字符串
 * @param {K} key
 * @param {Executable} executable
 */
function execute(key, executable) {
  executable.execute(key)
}

// 指定类型限制的另一个示例。
/**
 * @typedef {{a: string, b: number}} BaseOption
 */
/**
 * @template {{c: boolean}} T
 * @typedef {BaseOption & T} MergeOption
 */

/**
 * @type {MergeOption<{c: boolean, d: number}>}
 */
 const option = {}
 option.c
 

// 可以这样指定一个默认值给类型参数，这种写法编辑器还不支持。。。

/** @template [T=object] */
class Cache {
  /** @param {T} initial */
  constructor(T) {}
}
let c = new Cache()
