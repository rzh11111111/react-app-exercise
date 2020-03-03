import React, { Component, memo } from "react";

export default class MemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      obj: {
        num: -1,
      },
    };
  }

  setCounter = () => {
    this.setState({
      counter: 1,
      obj: {
        num: 100,
      },
    });
  };
  render() {
    const { counter, obj } = this.state;
    return (
      <div>
        <h1>PureComponentPage</h1>
        <button onClick={this.setCounter}>change</button>
        <Demo counter={counter} obj={obj} />
      </div>
    );
  }
}
//它的作⽤和 React.PureComponent 类似，是⽤来控制函数
// 组件的重新渲染的。 React.memo(...) 其实就是函数组件的 React.PureComponent 。
const Demo = memo(props => {
  const { counter } = props;
  console.log("render");

  return <div>{counter}</div>;
});

/* class Demo extends PureComponent {
  render() {
    const { counter } = this.props;
    console.log("render");
    return <div>{counter}</div>;
  }
} */
