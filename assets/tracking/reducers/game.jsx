import _ from 'lodash'

export default function(state = {}, action) {
  // ajax开始
  if (action.type === 'create_game') {
    return _.assign({}, state, {
      loading: true
    })
  }

  // 成功请求
  if (action.type === 'create_game_ok') {
    return _.assign({}, state, {
      created: action.payload,
      loading: false
    })
  }

  // 请求失败
  if (action.type === 'create_game_error') {
    return _.assign({}, state, {
      loading: false
    })
  }

  if (action.type === 'del_game') {
    return _.assign({}, state, {
      removed: action.payload,
      loading: false
    })
  }

  return state
}
