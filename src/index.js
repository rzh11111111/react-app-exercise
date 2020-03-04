import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/reduxStore"
//全局根据每次store里的数据变化的时候，做一个订阅执行
//subscribe
const render = ()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
}
render();
store.subscribe(render)


serviceWorker.unregister();
