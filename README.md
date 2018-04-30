# vue-base-project

> A base Vue.js project

## 环境依赖

```
 "node": ">= 6.0.0",
 "npm": ">= 3.0.0"
```

## 项目构建及运行

``` bash
# 安装淘宝镜像，如果已经安装可以换忽略，如果有vpn可以忽略(npm包一般需要翻墙下载，故选择淘宝镜像安装)
npm i cnpm -g

# 安装项目依赖
cnpm i

# 启动项目及代码热更新，访问路径localhost:8080（默认端口8080可以在config/index.js修改端口）
npm run dev

# 构建生产发布（此步骤一般在服务器端完成）
npm run build

```

## 项目说明

### 项目文档

- [git](https://progit.bootcss.com/)
- [markdown](https://www.appinn.com/markdown/)
- [vue](https://cn.vuejs.org/v2/guide/)
- [vuex](https://vuex.vuejs.org/zh-cn/)
- [ES6](http://es6.ruanyifeng.com/) 
- [vue插件库](https://www.awesomes.cn/subject/vue#%E5%BA%94%E7%94%A8-%E6%A1%86%E6%9E%B6)
- [iview](https://www.iviewui.com/docs/guide/install)
- [sass](https://www.sass.hk/docs/) 
- [vue-router](https://router.vuejs.org/zh-cn/) 
- [axios](https://github.com/axios/axios) 
- [lodash](https://www.lodashjs.com/)
- [promise](http://liubin.org/promises-book/)

### 文件目录

```bash
project/
|
├── build                       //项目构建目录
|  ├── build.js
|  ├── check-versions.js
|  ├── utils.js
|  ├── vue-loader.conf.js       
|  ├── webpack.base.conf.js     //webpack基础配置
|  ├── webpack.dev.conf.js      //开发配置
|  └── webpack.prod.conf.js     //生成配置
|
├── config
|   ├── dev.env.js
|   ├── index.js                //模板配置，端口配置
|   └── prod.env.js
|
├── node_modules                //npm包管理
|
├── src                        
|   ├── assets                  //静态文件
|   |   ├── css   
|   |   ├── images
|   |   └── js
|   |
|   ├── components              //组件
|   ├── mock                    //mock数据  
|   ├── pages                   //页面
|   ├── router                  //路由
|   ├── template                //模板页面
|   └── vuex                    //状态管理
| 
├── App.vue                     //入口页面
|
├── main.js                     //入口js
|
├── static
|
├── .babelrc                    //es6版本配置
|
├── .gitignore                  //忽略文件
|
├── index.html                  //首页
|
├── package.json                
|
├── package-lock.json
|
└── README.md
```

### 项目规范

- css采用[BEM](https://www.w3cplus.com/css/bem-definitions.html)命名规范
- javascript采用[ES2015](http://babeljs.io/learn-es2015/)标准
- 页面及组件命名规范后续补充

### 开发工具

- 建议使用[webStorm](http://www.jetbrains.com/webstorm/)进行开发
- 建议使用腾讯提供的[在线文档](https://363420113.docs.qq.com/QZADuvFTZJl#BB08J2)进行业务开发记录
