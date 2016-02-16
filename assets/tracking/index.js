import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {polyfill} from 'es6-promise'
import routes from './routes/index.jsx'
import createStore from './store/index.jsx'
import {ajaxSetup} from 'dejs/lib/ajax'
import startMock from './mocks/index.js'
import './helpers/load_base_style'

polyfill()

/**
 * 正式java环境会统一部署到www.dataeye.com
 * 域名中会多加一个目录作为系统标识
 */
ajaxSetup({
  contextPath: App.CONTEXT_PATH || ''
})

/**
 * 开发阶段mock可以选择打开或者关闭
 * url中的查询字符串包含mock则开启，默认关闭
 */
if (App.useMock) {
  startMock()
}

const store = createStore()

let Root = React.createClass({
  render() {
    return (
      <Provider store={store}>
        {routes}
      </Provider>
    )
  }
})

ReactDOM.render(<Root />, document.querySelector('#container'))
