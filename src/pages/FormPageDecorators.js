import React, {Component} from 'react';
import {Form,Input,Icon, Button } from 'antd'
const FormItem=Form.Item


const nameRule = {
    required:true,
    message:'please input your name'
}

const passwordRule = {
    required:true,
    message:'please input your password'
}

class FormPageDecorators extends Component {
    submit=()=>{
        //antd封装的方法
        const {getFieldsValue,getFieldValue,validateFields} = this.props.form

        validateFields((err,value)=>{
            if(err){
                console.log('err',err)
            }else{
                console.log('submit',value)
            }
        })
        // console.log('submie',getFieldsValue(),getFieldValue("name"));
    }
    render(){
        const {getFieldDecorator} = this.props.form
        // console.log(this.props)
        return (
            <div>
                FormPage
                <Form>
                    <FormItem label="姓名">
                        {/* 高阶组件 */}
                        {getFieldDecorator("name",{rules:[nameRule]})(<Input prefix={<Icon type="user"/>}/>)}
                        
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator("password",{rules:[passwordRule]})(<Input type="password"  prefix={<Icon type="lock"/>}/>)}
                        
                    </FormItem>
                    <FormItem >
                        <Button onClick={this.submit}>提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
        //装饰器
export default Form.create()(FormPageDecorators);