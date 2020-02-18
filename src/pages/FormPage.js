import React,{Component} from 'react';
import {Form,Input,Icon, Button } from 'antd'
const FormItem=Form.Item

export default class FormPage extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:''
        };
    }
    change=(field,event)=>{
        this.setState({
            [field]:event.target.value
        })
    }
    submit=()=>{
        console.log('submie',this.state)
    }
    render(){
        // const {name,password}=this.state
        return (
            <div>
                FormPage
                <Form>
                    <FormItem label="姓名">
                        <Input prefix={<Icon type="user"/>} onChange={(event)=>this.change('name',event)}/>
                    </FormItem>
                    <FormItem label="密码">
                        <Input type="password" prefix={<Icon type="lock"/>} onChange={(event)=>this.change('password',event)}/>
                    </FormItem>
                    <FormItem >
                        <Button onClick={this.submit}>提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}