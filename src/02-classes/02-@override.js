// ----------------------------------------------------- @override
// @override 和 TypeScript 一样，在要覆盖父类的同名方法的时候使用
// 在 jsconfig.json 中设置 `noImplicitOverride: true` 查看效果，该设置的意思是：不要有隐式的覆盖
export class C {
  m() {}
}
class D extends C {
  /** @override */
  m() {}
}
