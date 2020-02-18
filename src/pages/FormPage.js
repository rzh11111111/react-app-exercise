import React,{Component} from 'react';
import {Form,Input,Icon, Button } from 'antd'
const FormItem=Form.Item

export default class FormPage extends Component {
    render(){
        return (
            <div>
                FormPage
                <Form>
                    <FormItem label="姓名">
                        <Input prefix={<Icon type="user"/>}/>
                    </FormItem>
                    <FormItem label="密码">
                        <Input type="password" prefix={<Icon type="lock"/>}/>
                    </FormItem>
                    <FormItem >
                        <Button>提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}