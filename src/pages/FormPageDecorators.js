import React, {Component} from 'react';
import {Form,Input,Icon, Button } from 'antd'
const FormItem=Form.Item

class FormPageDecorators extends Component {
    submit=()=>{
        //antd封装的方法
        const {getFieldsValue} = this.props.form
        console.log('submie',getFieldsValue(),getFieldsValue("name"));
    }
    render(){
        const {getFieldDecorator} = this.props.form
        console.log(this.props)
        return (
            <div>
                FormPage
                <Form>
                    <FormItem label="姓名">
                        {/* 高阶组件 */}
                        {getFieldDecorator("name")(<Input prefix={<Icon type="user"/>}/>)}
                        
                    </FormItem>
                    <FormItem label="密码">
                        <Input type="password" prefix={<Icon type="lock"/>}/>
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