# static

DataEye前端资源

## 使用说明

assets下的css/fonts/img是共享文件夹，所有的静态资源直接直接放在各目录下。

各个新项目的js文件在assets下新建一个目录专门存放，目录名称需要简单明了。
所有项目的js入口文件名称统一为index.js。

webpack下新建一个js文件，内容直接复制tracking.js。
文件名与assets下的存放该项目js文件目录名相同。

package.json下新增三个scripts命令，类似如下：

```js
"scripts": {
  "build-${projectName}": "node node_modules/webpack/bin/webpack -p --config=webpack/${projectName}.js",
  "build-${projectName}-dev": "node node_modules/webpack/bin/webpack -d --config=webpack/${projectName}.js",
  "serve-${projectName}": "node node_modules/webpack-dev-server/bin/webpack-dev-server --config=webpack/${projectName}.js",
},
```

## 开发环境

启动本地webpack-dev-server，在开发环境直接使用本地资源，避免各种同步和手动刷新。

```bash
npm run serve-${projectName}
```

引用资源路径：

**http://127.0.0.1:8080/assets-dist/css/bundle.css**

**http://127.0.0.1:8080/assets-dist/${projectName}/common.js**

**http://127.0.0.1:8080/assets-dist/${projectName}/app.js**

注意：
开发环境引用的资源不会在文件系统上生成物理文件，只会保存在web-server的内存中。

## 打包发布

```bash
npm run build-${projectName}
```

打包之后统一发布到官网的public/static目录下。

友情提醒：
操作正式环境请先备份。
