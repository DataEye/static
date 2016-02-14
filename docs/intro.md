# DataEye/static 简介

DataEye几乎所有项目的前端代码都包含在本repo中，至于为什么这么做以及这么做的好处，有空我会专门写一篇文章来解释。

DataEye的前端核心框架技术基于React + Redux。
下面我先就整体目录结构以及使用到的具体技术一一做个概要介绍，深入地学习还要靠自己多钻研。

## 根目录

### .babelrc

[Babel](https://babeljs.io/)的配置文件，几乎不用动。
Babel能把ECMAScript 2015的代码编译成ECMAScript 5支持的代码，也就是说我们能够使用未来的JS代码风格来开发当前的应用。这样我们无需等待各主流浏览器的具体实现，而可以放心的使用未来的新特性。

一般来说，我们在平时的开发过程中无需过多的了解Babel的相关细节。
一次配置，我们就可以开始尽情地书写ECMAScript 2015的代码。
所以我们需要花费较多的时间来学习ECMAScript 2015。

推荐资源：

[阮一峰 - 《ECMAScript 6入门》（强烈推荐）](http://es6.ruanyifeng.com/)

[Babel 用户手册](https://github.com/thejameskyle/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)

### .editorconfig

用于在多人协作时统一各自的编辑器的代码风格。
比如统一使用2个空格来代替tab，行尾不允许出现空格等。

不同的编辑器需要安装对应的插件，详见[官网](http://editorconfig.org/)

### .eslintignore & .eslintrc

.eslintrc是ESLint的相关配置，.eslintignore用于指定那些忽略代码风格审查的文件和目录。
ESLint是一款JavaScript代码风格审查工具，支持JSX。
ESLint也是一次配置使用即可的工具，具体规则配置用到的时候google一下，了解即可。
详见[官网](http://eslint.org/)。


### .git & .gitignore

.gitignore用于忽略将哪些文件提交到版本管理系统，因为我们使用的版本管理系统时Git，所以你有必要了解一下Git常用的操作。

.git是Git的专用文件。

推荐阅读:

[git - 简明指南(强烈推荐)](http://rogerdudler.github.io/git-guide/index.zh.html)

### LICENSE

版权说明文件

### package.json

`package.json`定义了整个repo所有的元数据信息，包含repo的名称、简介、仓库地址以及所有的依赖信息等。
`package.json`是`npm`(Node.js的包管理器)的标准做法，每个包下面都必须包含一个package.json文件。

推荐阅读：

[npm的package.json中文文档](https://github.com/ericdum/mujiang.info/issues/6/)

[npm模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)

### README.md

项目说明文件

## webpack目录

DataEye的前端项目使用了[Webpack](http://webpack.github.io/docs/)作为模块加载器，早前我们使用的是Browserify。
如果你之前没有接触过Webpack，不建议你直接阅读官网的文档，会有挫败感。
在初期你只需要知道怎么使用命令来操作Webpack协助开发或者发布就可以了。

webpack目录下的js文件用于Node.js环境，主要是`package.json`的scripts下的相关命令，代码如下：

```js
"build-monitor": "node webpack/lint.js monitor && node node_modules/webpack/bin/webpack -p --config=webpack/monitor.js",
"serve-monitor": "node node_modules/webpack-dev-server/bin/webpack-dev-server --config=webpack/monitor.js"
```

执行`npm run build-monitor`为打包优化整个monitor项目的前端资源，
执行`npm run serve-monitor`是为monitor项目开启本地的webpack dev server，方便开发调试。

## node_modules目录

node_modules目录不包含也不会提交到代码仓库（因为.gitignore中配置了node_modules）。
它是在你签出repo以后执行`npm install`之后产生的。

## assets目录

### css

全部的css文件，扁平化处理，避免增加复杂度。
重名的话使用前缀区分。

### font

全部字体文件，我们主要使用了[font-awesome](http://fortawesome.github.io/Font-Awesome/icons/)。
只需要加一个类，我们就可以使用多种多种的字体图表。

```html
<i class="fa fa-cloud"></i>
```

### img

全部图片文件，不要使用gif文件！

### monitor & tracking & ...

monitor & tracking项目的前端JavaScript代码

## js目录

js目录以DataEye具体业务命名，比如tracking就是推广分析平台的前端JavaScript代码。

为了理解方便，下面的目录介绍我仍然以js打头。

### js/actions

所有的Redux的action，我们所有的action都遵循[FSA(Flux Standard Action)](https://github.com/acdlite/flux-standard-action)标准。
不过为了开发的方便，我们也按照自己的约定进行了扩展。
比如app.jsx下面的一个action creator函数：

```js
export function create(payload) {
  return {
    type: 'create_app',
    payload,
    meta: {
      ajax: true,
      url: '/createApp.do'
    }
  }
}
```

这个create函数返回的action中的meta属性包含ajax和meta两个字段：

> * ajax: 这是异步action包含ajax请求
> * url: 请求的接口地址

所有的ajax全部默认使用POST请求，`payload`是post请求的表单数据。处理过程参考`dejs/lib/redux-ajax-middleware`。

### js/components

所有的公共组件，如果包含多个文件请新建一个文件夹。
对于复杂的React组件，文件夹的名称为组件名，文件夹下面一般包含一个`SmartComponent`和`DumbComponent`，分别命名为`container.jsx`和`index.jsx`。
请参考mixed_panel组件。

推荐阅读：

[Presentational and Container Components （强烈推荐）](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.nmj487ccm)

### js/helpers

一些辅助函数，如果这些函数具备一定的通用能力之后，请将他们移植到dejs/src/utils。

load_base_style用于引入项目所需的全部css文件，引入之后会有webpack统一打包输出到css目录下。

constants.jsx用于存储所有的常量（Redux相关的默认值）。

### js/mocks

index.js为入口文件，其他文件为相关模块接口的mock调用。
为了使用上的方便，我们做了一些封装，参考`dejs/lib/mock`。

### js/pages

root.jsx为入口文件，其他按功能模块划分组织各个页面。

### js/reducers

Redux的reduers，index.jsx为入口文件，其它文件为各模块的reducer。

对于组件的reducer写法也与普通的reducer一致，这种一致性是使用了`dejs/lib/reduxis`来区分不同的组件实例。

### js/routes

页面路由，使用`react-router`。
新页面加入时需要在这里增加处理逻辑。

### js/store

Redux的createStore，会根据环境变量不同来做一些中间件的处理。目前我们使用了`dejs/lib/redux-ajax-middleware`和`redux-logger`。

### js/widgets

业务组件，与当前业务紧密相关的组件，依赖较多，不具备通用性，无法移植到的dejs。

### index.js

项目入口文件，一些全局和基础性的工作在这里进行。
比如相关的polyfill，ajax的全局路径设置，mock开关，样式导入等。

## assets-dist目录

打包后的资源文件，css会加上项目名作为前缀区分。
js文件在各自的项目下有2个，一个app，一个common。

由于js文件较大，所以每次提交的时候只需要保留本次发布的上个版本的js文件即可，其他可以删除。
