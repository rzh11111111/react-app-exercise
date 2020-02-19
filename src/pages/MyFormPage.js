import React , {Component} from 'react';
//自己实现formpage

//高阶组件
function kFormCreate(Cmp) {
    return class extends Component {
        constructor(props){
            super(props)
            this.options={}//存储配置字段项
            this.state={}//存字段
        }
        handleChange=(event)=>{
            const {name,value} = event.target
            this.setState({
                [name]:value
            })
        }
        getFieldDecorator=(field,option)=>{
            this.options[field]=option;
            return InputCmp=><div className="border">{
                React.cloneElement(InputCmp,{
                    name:field,
                    value:this.state[field]||"",
                    onChange:this.handleChange
                })
            }</div>
        }
        getFieldsValue=()=>{
            return {...this.state}
        }
        getFieldValue=(field)=>{
            return this.state[field]
        }
        render(){
            return (
                <div className="border">
                    <Cmp {...this.props} getFieldDecorator={this.getFieldDecorator}
                    getFieldsValue={this.getFieldsValue}
                    getFieldValue={this.getFieldValue}
                    />
                    
                </div>
            )
        }
    }
}

class MyFormPage extends Component {
    submit =()=>{
        const {getFieldsValue,getFieldValue} = this.props
        console.log("submit",getFieldsValue(),getFieldValue("name"))
    }
    render(){
        const {getFieldDecorator} = this.props
        return (
            <div>
                MyFormPage
                
                       
                        {
                        getFieldDecorator('name')(
                            <input type="text"/>
                        )
                        
                        }

                        {
                        getFieldDecorator('password')(
                            <input type="password"/>
                        )
                        
                        }
                        
                        
                   
                        <button onClick={this.submit}>提交</button>
                    
                
            </div>
        )
    }
}

export default kFormCreate(MyFormPage)