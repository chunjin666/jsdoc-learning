// 与上面的 @extends 类似，用在继承时。@augments 用来指定父类的类型参数（泛型参数）。
// 在继承时，子类的类型参数必须包含父类的类型参数。
// 例如：React.Component 定义了2个类型参数 Props 和 State，在 .js 文件中，没有合法的语法来声明这2个类型的参数类型。默认情况下类型会被当成 any 来处理。
import { Component } from 'react';
class MyComponent1 extends Component {
  render() {
    this.props.b; // 允许这么写, 因为 this.props 类型被当成 any
  }
}

// 但是，如果我们使用 @augments 来指定父类的类型参数，就可以指定父类的类型参数。
// import { Component } from "react"
/**
 * @typedef {{ a: number }} State
 */
/**
 * @augments {Component<{b: number}, State>}
 */
class MyComponent2 extends Component {
  // @ts-ignore
  render() {
    this.props.b; // Ok
    this.props.c; // Error: 类型“Readonly<{ b: number; }> & Readonly<{ children?: ReactNode; }>”上不存在属性“c”。
  }
}
