import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import ajaxMiddleware from 'dejs/lib/redux-ajax-middleware'
import rootReducers from '../reducers/index.jsx'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

const finalStoreCreator = applyMiddleware(
    loggerMiddleware,
    ajaxMiddleware
)(createStore)

export default (initialState = {}) => {
  return finalStoreCreator(rootReducers, initialState)
}
