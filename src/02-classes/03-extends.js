// ----------------------------------------------------- @extends
// 当在 JavaScript 中继承一个基础类型的时候，可以通过 @extends 添加一个类型参数
// 普通继承的时候不需要添加这个标签就已经能识别了。

/**
 * @template T
 * @extends {Set<T>}
 */
 class SortableSet extends Set {
  // ...
}
