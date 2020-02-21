import React , {Component} from 'react';
//在最外层body里面创建dom，传送门
import {createPortal} from 'react-dom';

export default class Dialog extends Component{
    constructor(props){
        super(props)
        const doc = window.document
        this.node = doc.createElement('div')
        doc.body.appendChild(this.node)
    }
    //删除全局创建的div
    componentWillUnmount(){
        window.document.body.removeChild(this.node)
    }
    render(){
        return createPortal(
            <div className="dialog">
                Dialog
                <button onClick={this.props.hideDialog}>close</button>
                {this.props.children}
            </div>,
            //创建div
            this.node
        )
    }
}