/**
 * 入口组件
 * 与redux相关的处理在此添加
 */

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Home from './home/index.jsx'
import actionMap from '../actions/index.jsx'
import _ from 'lodash'

export function mapStateToProps(state = {}) {
  return {
    states: _.assign({}, state)
  }
}

export function mapDispatchToProps(dispatch) {
  let actions = bindActionCreators(actionMap, dispatch)
  return {actions}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
