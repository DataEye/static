# static

DataEye前端资源

## 使用说明

assets下的css/fonts/img是共享文件夹，所有的静态资源直接直接放在各目录下。

assets-dist目录为线上优化后的资源，为了避免版本库的膨胀，打包的js原则上只保留上一个版本（方便定位追查问题）。

webpack下的文件为打包构建专用的文件。

使用`git commit`提交代码会强制`lint`，不通过无法提交。（详见`package.json`）

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

## 依赖说明

如果引入的依赖为前端线上依赖，请加入到dependencies节点。
如果引入的依赖为开发工具依赖，请加入到devDependencies节点。
dependencies依赖会全部打包成bundle.{md5}.js，所以请不要引入不必要的依赖。
在开发阶段和发布阶段，依赖不完全相同，请注意修改webpack/const在发布时来移除开发阶段相关依赖。

## 新项目注意事项

比如现在开启了新项目应用统计分析，目录名定位app，那么需要完成以下操作：

### 创建assets/app

所有的脚本文件放在此目录

### 创建webpack/app.js

webpack配置文件放在这里，文内内容复制tracking.js然后按需修改即可

### 修改package.json，加入相关脚本

scripts节点加入如下配置：

```js
"build-app": "node webpack/lint.js app && node node_modules/webpack/bin/webpack -p --config=webpack/app.js",
"build-app-dev": "node node_modules/webpack/bin/webpack -d --config=webpack/app.js",
"serve-app": "node node_modules/webpack-dev-server/bin/webpack-dev-server --config=webpack/app.js"
```
