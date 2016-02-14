import {createStore, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import ajaxMiddleware from 'dejs/lib/redux-ajax-middleware'
import rootReducers from '../reducers/index.jsx'

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
  duration: true
})

let middlewares = [ajaxMiddleware]

if (process.env.NODE_ENV === 'development') {
  middlewares.unshift(loggerMiddleware)
}

let finalStoreCreator = applyMiddleware(...middlewares)(createStore)

export default (initialState = {}) => {
  return finalStoreCreator(rootReducers, initialState)
}
