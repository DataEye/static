export function query(payload) {
  return {
    payload,
    type: 'show_device',
    meta: {
      ajax: true,
      url: '/getDeviceList.do'
    }
  }
}

export function initSelectData(payload) {
  return {
    payload,
    type: 'init_select_data',
    meta: {
      ajax: true,
      url: '/getDeviceInitData.do'
    }
  }
}

export function getEditData(payload) {
  return {
    payload,
    type: 'get_edit_data'
  }
}

export function add(payload) {
  return {
    type: 'add_device',
    payload,
    meta: {
      ajax: true,
      url: '/addDevice.do'
    }
  }
}

export function update(payload) {
  return {
    type: 'update_device',
    payload,
    meta: {
      ajax: true,
      url: '/updateDevice.do'
    }
  }
}

export function del(payload) {
  return {
    type: 'delete_device',
    payload,
    meta: {
      ajax: true,
      url: '/deleteDeviceById.do'
    }
  }
}

export function clearEditData(payload) {
  return {
    type: 'clear_editData',
    payload
  }
}
