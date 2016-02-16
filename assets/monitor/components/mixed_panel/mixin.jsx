/**
 * 使用redux管理状态的组件使用的mixin
 */
import {PropTypes} from 'react'
import _ from 'lodash'

export default {
  propTypes: {
    // 组件id，必须唯一。对应到action和reducer
    id: PropTypes.string.isRequired,
    actions: PropTypes.any.isRequired,
    states: PropTypes.any.isRequired
  },

  getReduxActionByName(actionName) {
    return this.props.actions[_.camelCase(this.props.id) + actionName]
  },

  getReduxStates() {
    return this.props.states[this.props.id]
  },

  doAction(actionName, payload) {
    this.getReduxActionByName(actionName)(_.assign({
      componentID: this.props.id
    }, payload))
  }
}
