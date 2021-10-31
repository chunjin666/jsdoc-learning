class Car {
  /** @private */
  innerName = ""
  constructor() {
    /** @private */
    this.identifier = 100
  }

  printIdentifier() {
    console.log(this.identifier)
  }
}

const car = new Car()
console.log(car.identifier) // 属性“identifier”为私有属性，只能在类“Car”中访问。
console.log(car.innerName) // 属性“innerName”为私有属性，只能在类“Car”中访问。

// @public 是默认的可以省略不写, 代表着一个属性可以在任何地方访问到.
// @private 代表一个属性只能在类内部被访问.
// @protected 代表一个属性只能在类内部或者所有子类中访问到.
// @public, @private, @protected 不能对构造函数生效.

// ----------------------------------------------------- @readonly
// @readonly 标识符表示一个属性只能在构造函数初始化的过程中被写入

class Car1 {
  /** @readonly */
  readonlyProp = true
  constructor() {
    /** @readonly */
    this.identifier = 100
  }

  printIdentifier() {
    console.log(this.identifier)
  }

  someMethod() {
    this.readonlyProp = false
    // 无法分配到 "readonlyProp" ，因为它是只读属性。
  }
}

const car1 = new Car1()
car1.identifier = 0
// 无法分配到 "identifier" ，因为它是只读属性。
