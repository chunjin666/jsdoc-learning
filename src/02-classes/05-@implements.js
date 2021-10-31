// ----------------------------------------------------- @implements
// 通过 @implements 可以像 TypeScript 一样实现一个接口。如果没有完整实现接口会提示错误。
/**
 * @implements {HTMLElement}
 */
class CustomElement {
  /**
   * @type {string}
   */
  accessKey

  click() {}
  // ...
  constructor() {
    this.accessKey = "custom"
  }
}
