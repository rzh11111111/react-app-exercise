import React, { Component } from "react";
import store from "../store/reduxStore";

export default class ReduxPage extends Component {
  // componentDidMount() {
  //   //每次store里的数据变化的时候，做一个订阅执行
  //   store.subscribe(() => {
  //     //forceUpdate就是重新render。有些变量不在state上，但是你又想达到这个变量更新的时候，刷新render；或者state里的某个变量层次太深，更新的时候没有自动触发render。这些时候都可以手动调用forceUpdate自动触发render
  //     //对象和数组，本身无法检测对象添加或者删除
  //     this.forceUpdate();
  //     // this.setState({});
  //   });
  // }
  render() {
    return (
      <div>
        <h1>ReduxPage</h1>
        <p>counter:{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: "add" })}>add</button>
        <button onClick={() => store.dispatch({ type: "minus" })}>minus</button>
      </div>
    );
  }
}
