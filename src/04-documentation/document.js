/** @deprecated */
const apiV1 = {}
const apiV2 = {}

apiV1






/**
 * 这2种方式都可以链接到 bar 函数。说是这么说，但实测下面这种方式不行。
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// 可以使用行内的 {@link} 标记去添加一个链接，可以比较自由的访问其他描述信息。
/**
 * @see {@link foo} for further information.
 * @see {@link [http://github.com](http://github.com)}
 */
function bar() {}








foo()
bar()