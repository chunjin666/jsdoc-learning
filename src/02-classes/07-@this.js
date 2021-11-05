// ----------------------------------------------------- @this
// 通常情况下编译器能通过函数上下文确定 this 的类型，如果某些情况下不能确定的时候，可以通过 @this 明确指明它的类型。

/**
 * @this {HTMLElement}
 */
function clearEventHandler() {
  this.onclick = null;
  this.onblur = null;
  this.onfocus = null;
}

const someEl = document.querySelector('#id_xxx');
clearEventHandler.call(someEl);
// 也可以把 clearEventHandler 添加到 HTMLElement 的原型上来使用
