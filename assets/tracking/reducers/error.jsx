import _ from 'lodash'

export default function(state = {}, action) {
  if (action.type === 'ajax_error') {
    return _.assign({}, state, {
      ajax: action.payload
    })
  }

  return state
}
