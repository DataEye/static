/*eslint-disable*/
var webpack = require('webpack')
var _ = require('lodash')
var pkg = require('../package.json')
var argv = require('yargs').argv
var deps = Object.keys(pkg.dependencies)
var host = argv.host || '127.0.0.1'
var port = argv.port || 8080
var DEV_SERVER_HOST = `http://${host}:${port}`
var isProduction = !!argv.p
// css和dejs不打包
_.pull(deps, 'dejs', 'bootstrap', 'font-awesome')

var DEPS = isProduction ? _.pull(deps.concat(), 'superagent-mocker') : deps.concat([
  'webpack/hot/dev-server',
  'webpack-dev-server/client?' + DEV_SERVER_HOST
])
var NODE_ENV = isProduction ? 'production' : 'development'
var BUILD_DIR = 'assets-dist'
// TODO 加入到官网
// require图片时使用这个publicPath，css loader有自己的publicPath
var FONTS_PATH = `${BUILD_DIR}/fonts`
var IMG_PATH = `${BUILD_DIR}/img`
var PLUGINS = isProduction ? [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
] : [
  new webpack.HotModuleReplacementPlugin()
]

module.exports = function(projectName) {
  process.env.NODE_ENV = NODE_ENV

  console.log(`
    Current project name is ${projectName}.
    We are running in <<${NODE_ENV}>> mode ...
    Our vendor module list contains:
    ${[''].concat(DEPS).sort().join('\n\t\t\t')}
  `)

  var JS_DIR = `${BUILD_DIR}/${projectName}`
  // css文件加入系统名称，防止混乱
  var STYLE_BUNDLE_PATH = isProduction ?
    `${BUILD_DIR}/css/${projectName}.bundle.[chunkHash].css` : `${BUILD_DIR}/css/bundle.css`
  return {
    IS_PRODUCTION: isProduction,
    NODE_ENV,
    BUILD_DIR,
    DEV_SERVER_HOST,
    BUILD_DIR,
    PLUGINS,
    DEPS,
    FONTS_PATH,
    IMG_PATH,
    STYLE_BUNDLE_PATH,
    ENTRY_PATH : `./assets/${projectName}/index.js`,
    APP_BUNDLE_PATH : isProduction ? `${JS_DIR}/app.[chunkHash].js` : `${JS_DIR}/app.js`,
    VENDOR_BUNDLE_PATH : isProduction ? `${JS_DIR}/common.[chunkHash].js` : `${JS_DIR}/common.js`
  }
}
