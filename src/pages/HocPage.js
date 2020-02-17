//hoc高阶组件
import React,{Component} from 'react';



const foo = Cmp =>props=>{
    return <div className="border1">
        <Cmp {...props}/>
    </div>
}

const foo2 = Cmp =>props=>{
    return <div className="background1">
        <Cmp {...props}/>
    </div>
}
//普通方式调用高阶组件
// function Child(props){
//     return <div>Child</div>
// }


//装饰器方式调用高阶组件
@foo2
@foo
class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

@foo
class HocPage extends Component {
// export default class HocPage extends Component {
    render(){
        //普通方式调用高阶组件
        // const Foo=foo2(foo(Child))
        return (
            <div>
                <h1>HocPage</h1>
                {/* 装饰器方式调用高阶组件 */}
                <Child/>
            </div>
        )
    }
}

export default HocPage