import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import ajaxMiddleware from 'dejs/lib/redux-ajax-middleware'
import rootReducers from '../reducers/index.jsx'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

let finalStoreCreator

if (process.env.NODE_ENV === 'development') {
  finalStoreCreator = applyMiddleware(
    loggerMiddleware,
    ajaxMiddleware
  )(createStore)
} else {
  finalStoreCreator = applyMiddleware(
    ajaxMiddleware
  )(createStore)
}

export default (initialState = {}) => {
  return finalStoreCreator(rootReducers, initialState)
}
