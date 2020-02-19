import React , {Component} from 'react';
//自己实现formpage

//高阶组件
function kFormCreate(Cmp) {
    return class extends Component {
        render(){
            return (
                <div className="border">
                    <Cmp {...this.props}/>
                </div>
            )
        }
    }
}

export default class MyFormPage extends Component {
    submit =()=>{
        console.log("submit")
    }
    render(){
        return (
            <div>
                MyFormPage
                <input/>
                <input type="password"/>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}