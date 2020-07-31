# vue_mall

```
【项目描述】
1、此项目为一个前后端分离的 电商实战项目
2、采用了 Vue 全家桶+ES6+Webpack 等前端最新技术
3、项目包括商家、商品、用户、等多个功能子模块
4、采用模块化、组件化、工程化的模式开发

【你能从此项目中学到什么】
项目开发流程及开发方法和思想
1、熟悉一个项目开发的流程
2、学会组件化、模块化、工程化的开发模式
3、掌握使用 vue-cli 脚手架初始化 vue.js 项目
4、学会 ES6+eslint 的开发方法
5、掌握一些项目的优化技巧

【插件或第三方库】
1、学会使用 vue-router 开发单页面
2、学会使用 axios 的封装和后端数据交互(https://github.com/axios/axios)
3、学会使用 vuex 管理应用组件的状态
4、学会是使用 better-scroll 实现页面滑动效果
5、学会使用 vant-ui 组件库构建界面
6、学会使用 vue-lazyload 实现图片懒加载
【项目目录结构】
独立模块，都封装为一个组件
dist：项目打包后生成的文件
node_modules：npm 加载的项目依赖模块
public：静态资源目录，如图片、字体、icon 图标 ，其中里面的 index.html 是模板，当运行 npm run build 打包的时候，就是以这里的 index.html 作为模板打包 输出 到 dist 文件夹下生成一个新的 index.html 文件

src：源代码，包含了如下几个目录及文件:
    assest: 放置一些图片，如 logo 等
        assest 里的 css，放入第三方和自己的 css
    components: 这里我一般用来放置一些公共的组件
        components 里的 common：跟项目没关系，独立于该项目的公共组件，其他项目也可用。
            swiper 轮播图方法
            navbar 顶部导航组件
        components 里的 content:跟业务有关系的，只跟该项目有关的公公共组件
    App.vue:应用组件，我们写的所有组件都是在这个组件之上运行的
    main.js: 项目的核心文件，入口 js 文件
    router: 路由文件夹，决定页面路由的跳转规则
    store: vuex 的状态管理文件
    network：自己创建的，用来存放项目中发起请求的 js 文件模块
    views:页面
    pluginunit：自己创建的，用来存放项目中所使用到的 ui 插件的 js 文件
    common: 存放一些公共的 js 文件 比如, rem.js 用来解决移动端适配问题的

    package.json：项目的配置文件，以及一些插件依赖包的信息
    package-lock.json：插件依赖的详细信息
    babel.config.js ：用来配置一些 ui 插件
    README.md：项目的说明文档，markdown 格式

【项目开始】
一、【创建项目】
vue create vue_mall

二、【git 托管】
如果是个人 github 账号,注意在~/.ssh 文件配置 2 个账号，拉代码时修改对应 host,比如我的是 Host my.github.com
（git remote rm origin）
git remote add origin git@my.github.com:a-gui/vue-mall.git
git push -u origin master

三、【创建目录结构】
components 里的 common、content
router、store、network、views

四、【编码顺序】
1.assest 里的 css，引入第三方 css:normalize.css。建立自己的base.css,其导入normalize.css
2.APP.vue组件内style导入base.css，使css均生效。原理：项目在打包的时候，会从此顺序依次找到css文件，使其被打包：main.js -> APP.vue -> 2个css文件
3.创建vue.config.js对路径起一些别名，可直接引用assets: "@/assets",
// 之前：@import "./assets/css/base.css";
// 现在：@import "assets/css/base.css";
4.创建.editorconfig，对多人开发代码风格做统一

【首页底部tab-bar编写】
1.一个应用开发，首先要做的是底部的tab-bar(可以自己写，也可以用<van-tabbar-item/>)
自己写：底部整体是个组件，包含4个小组件，其可以是一类组件TabBarItem,包含2个插槽：图片和文字。可以改变
2.写完后进行import到APP.vue,然后注册，使用
3.由于底部tab与路由相关，需要安装加载router:npm install vue-router --save
4.在router里创建index.js,对路由import、use、new()、export、到main.js中导入、挂载
5.在router.index.js里创建routes,写路由映射关系，写对应的页面
6.修改应用图标，存在public里的favicon.ico

【首页轮播图编写】
首页里先加入轮播图，因为主页面只要一个管家，只存主要结构！所以把轮播图剥离到Home的子组件。这种取名前缀加Home,HomeSwiper
然后导入Home，通过子组件props，传递banners

【首页推荐组件编写】


```

### 目录解释

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
