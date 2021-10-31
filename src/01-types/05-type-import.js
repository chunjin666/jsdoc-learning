// ----------------------------------------------------- 类型导入
// .d.ts声明文件中的类型可以直接使用
/**
 * @param {Pet} p
 */
function walk(p) {
  console.log(`Walking ${p.name}...`)
}

// 可以导入之后用来定义其他类型
/**
 * @typedef { import("./types").Pet } Pet
 */

/**
 * @type {Pet}
 */
var myPet

// ----------------------------------------------------- import 导入
// 可以导入 @typedef 定义的类型!!!
// 不过 eslint 如果开启了 no-unused-vars 会提示错误，可以添加 // eslint-disable-next-line no-unused-vars
import { AccountType } from './accounts'

/**
 * @type {AccountType}
 */
var accountType = 'normal'

// 也可以在使用的地方直接导入类型
/**
 * @type {import('./accounts').AccountType}
 */
var accountType2
