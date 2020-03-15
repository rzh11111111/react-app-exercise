import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    // isLogin来自props
    const { component: Cmp, isLogin, ...rest } = this.props;
    console.log("PrivateRoute", this.props);
    return (
      <Route
        {...rest}
        render={props => {
          return isLogin ? (
            // 如果登录了的话
            <Cmp {...props} />
          ) : (
            //如果没登录
            // redirect把上一次的值记录下来，存在location.state.redirect里
            <Redirect
              to={{
                pathname: "/login",
                state: { redirect: this.props.location.pathname },
              }}
            />
          );
        }}
      />
    );
  }
}
//高阶组件
//connect吧store的state和react的props关联起来
export default connect(state => ({ isLogin: state.user.isLogin }))(
  PrivateRoute,
);
