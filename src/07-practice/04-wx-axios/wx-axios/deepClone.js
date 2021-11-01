import { isRawType } from "./type"
/**
 * 获取RegExp的字符串
 * @param {RegExp} re
 */
const getRegExp = (re) => {
  let flags = ""
  if (re.global) flags += "g"
  if (re.ignoreCase) flags += "i"
  if (re.multiline) flags += "m"
  return flags
}

/**
 * deep clone
 * @template T
 * @param  {T} parent 需要进行克隆的对象
 * @return {T}        深克隆后的对象
 */
export default (parent) => {
  // 维护两个储存循环引用的数组
  /** @type {any[]} */
  const parents = []
  /** @type {any[]} */
  const children = []

  const _clone = (/** @type {T} */ parent) => {
    if (parent === null) return null
    if (typeof parent !== "object") return parent

    let child, proto

    if (Array.isArray(parent)) {
      // 对数组做特殊处理
      child = []
    } else if (parent instanceof RegExp) {
      // 对正则对象做特殊处理
      child = new RegExp(parent.source, getRegExp(parent))
      if (parent.lastIndex) child.lastIndex = parent.lastIndex
    } else if (parent instanceof Date) {
      // 对Date对象做特殊处理
      child = new Date(parent.getTime())
    } else {
      // 处理对象原型
      proto = Object.getPrototypeOf(parent)
      // 利用Object.create切断原型链
      child = Object.create(proto)
    }

    // 处理循环引用
    const index = parents.indexOf(parent)

    if (index !== -1) {
      // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
      return children[index]
    }
    parents.push(parent)
    children.push(child)

    for (const i in parent) {
      // 递归
      // @ts-ignore
      child[i] = _clone(parent[i])
    }

    return child
  }
  return _clone(parent)
}
