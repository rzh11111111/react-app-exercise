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

// function Child(props){
//     return <div>Child</div>
// }

@foo2
@foo
class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

export default class HocPage extends Component {
    render(){
        // const Foo=foo2(foo(Child))
        return (
            <div>
                <h1>HocPage</h1>
                <Child/>
            </div>
        )
    }
}