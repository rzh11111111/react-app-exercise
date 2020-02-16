npm start


创建方式 
npx create-react-app my-app

npm install antd -s  //类似elementui

//安装react-app-rewired取代react-scripts(package.json里的),可以扩展webpack的配置，类似vue.config.js
npm install react-app-rewired customize-cra babel-plugin-import -d //-d只在开发环境用到
//然后目录创建config-overrides.js

//修改package.json
 "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
  },

  //配置装饰器npm install -d @babel/plugin-proposal-decorators
  //也在config-overrides.js里配置
  
