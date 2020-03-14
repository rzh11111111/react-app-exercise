import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from "./store/reduxStore"
//全局根据每次store里的数据变化的时候，做一个订阅执行
//subscribe


// const render = ()=>{
//     ReactDOM.render(<App />, document.getElementById('root'));
// }
// render();
// store.subscribe(render)



import store from './store/'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
