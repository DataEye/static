export function del(payload) {
  return {
    type: 'del_app',
    payload,
    meta: {
      ajax: true,
      url: '/delApp.do'
    }
  }
}
export function create(payload) {
  return {
    type: 'create_app',
    payload,
    meta: {
      ajax: true,
      url: '/createApp.do'
    }
  }
}
export function edit(payload) {
  return {
    type: 'edit_app',
    payload,
    meta: {
      ajax: true,
      url: '/editApp.do'
    }
  }
}
export function imp(payload) {
  return {
    type: 'imp_app',
    payload
  }
}
export function importApp(payload) {
  return {
    type: 'import_app',
    payload,
    meta: {
      ajax: true,
      url: '/bindApp.do'
    }
  }
}
