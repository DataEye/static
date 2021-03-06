import _ from 'lodash'

export default function(state = {}, action) {
  // ajax开始
  if (action.type === 'del_app') {
    return _.assign({}, state, {
      delState: 'start'
    })
  }

  // 成功请求
  if (action.type === 'del_app_ok') {
    window.location.reload()
    return _.assign({}, state, {
      delState: 'success',
      delAppID: action.payload.content.appid
    })
  }

  // 请求失败
  if (action.type === 'del_app_error') {
    alert(action.payload.content)
    return _.assign({}, state, {
      delMsg: action.payload,
      delState: 'fail'
    })
  }

  // ajax开始
  if (action.type === 'create_app') {
    return _.assign({}, state, {
      createState: 'start'
    })
  }

  // 成功请求
  if (action.type === 'create_app_ok') {
    return _.assign({}, state, {
      created: action.payload,
      createState: 'success'
    })
  }

  // 请求失败
  if (action.type === 'create_app_error') {
    alert(action.payload.content)
    return state
  }

  // ajax开始
  if (action.type === 'edit_app') {
    return _.assign({}, state, {
      editState: 'start'
    })
  }

  // 成功请求
  if (action.type === 'edit_app_ok') {
    return _.assign({}, state, {
      edit: action.payload.content,
      editState: 'success'
    })
  }

  // 请求失败
  if (action.type === 'edit_app_error') {
    alert(action.payload.content)
    return _.assign({}, state, {
      editState: 'fail'
    })
  }

  //导入
  if (action.type === 'imp_app') {
    debugger
    return _.assign({}, state, {
      importData: action.payload
    })
  }

  // ajax开始
  if (action.type === 'import_app') {
    return _.assign({}, state, {
      createState: 'start'
    })
  }

  // 成功请求
  if (action.type === 'import_app_ok') {
    return _.assign({}, state, {
      created: action.payload,
      createState: 'success'
    })
  }

  // 请求失败
  if (action.type === 'import_app_error') {
    alert(action.payload.content)
    return _.assign({}, state, {
      createState: 'fail'
    })
  }

  return state
}
