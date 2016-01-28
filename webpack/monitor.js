/*eslint-disable*/
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')
var projectName = path.basename(__filename, '.js')
var config = require('./const')(projectName)

module.exports = {
  entry: {
    vendor: config.DEPS,
    app: config.ENTRY_PATH,
  },
  output: {
    filename: config.APP_BUNDLE_PATH,
    // 必须加上否则在js中require图片之后src路径不对
    publicPath: config.PUBLIC_PATH
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {
          // 需要重写，否则路径不对
          publicPath: config.PUBLIC_PATH
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        // name严格输出文件到本地目录，但是会导致css内的图片、字体资源路径不对
        loader: `url-loader?limit=1024&name=${config.IMG_PATH}/[hash].[ext]`
      },
      // file-loader https://github.com/webpack/file-loader
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?.*)?$/,
        loader: `file-loader?name=${config.FONTS_PATH}/[hash].[ext]`
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": `"${config.NODE_ENV}"`
      }
    }),
    new ExtractTextPlugin(config.STYLE_BUNDLE_PATH, {allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin('vendor', config.VENDOR_BUNDLE_PATH)
  ].concat(config.PLUGINS),
  devtool: '#source-map'
}
