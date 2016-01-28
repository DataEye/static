import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {polyfill} from 'es6-promise'
import routes from './routes/index.jsx'
import createStore from './store/index.jsx'
import {ajaxSetup} from './utils/ajax.jsx'
import './helpers/load_base_style'

polyfill()

debugger
ajaxSetup({
  contextPath: App.CONTEXT_PATH || ''
})

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
