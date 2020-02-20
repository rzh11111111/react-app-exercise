import React , {Component} from 'react';
import {Button} from 'antd';
import Dialog from '../components/Dialog'
export default class DialogPage extends Component {
    constructor(props){
        super(props)
        this.state={
            showDialog:false
        }
    }
    handleShowDialog = ()=>{
        this.setState({
            showDialog:!this.state.showDialog
        })
    }
    render(){
        const {showDialog} = this.state
        return (
            <div>
                DialogPage
                <Button onClick={this.handleShowDialog}>dialog toggle</Button>
                {showDialog &&<Dialog/>}
            </div>
        )
    }
}