export function queryIdcServer(payload) {
  return {
    payload,
    type: 'show_server',
    meta: {
      ajax: true,
      url: '/monitor/queryRoomServerList.do'
    }
  }
}

export function queryBusiServer(payload) {
  return {
    payload,
    type: 'show_server',
    meta: {
      ajax: true,
      url: '/monitor/queryBusinessServerList.do'
    }
  }
}

export function queryGroupServer(payload) {
  return {
    payload,
    type: 'show_server',
    meta: {
      ajax: true,
      url: '/monitor/queryGroupServerList.do'
    }
  }
}

export function getModule(payload) {
  return {
    payload,
    type: 'get_module',
    meta: {
      ajax: true,
      url: '/monitor/queryModuleByBusiness.do'
    }
  }
}

export function queryGroup(payload) {
  return {
    payload,
    type: 'show_group',
    meta: {
      ajax: true,
      url: '/monitor/queryGroup.do'
    }
  }
}


export function addServer(payload) {
  return {
    payload,
    type: 'add_server',
    meta: {
      ajax: true,
      url: '/monitor/addMachineForGroup.do'
    }
  }
}


export function addGroup(payload) {
  return {
    payload,
    type: 'add_group',
    meta: {
      ajax: true,
      url: '/monitor/addGroup.do'
    }
  }
}

export function nextPage(payload) {
  return {
    payload,
    type: 'next_group_page'
  }
}

export function deleteGroup(payload) {
  return {
    payload,
    type: 'delete_group',
    meta: {
      ajax: true,
      url: '/monitor/deleteGroup.do'
    }
  }
}

export function loadServerList(payload) {
  return {
    payload,
    type: 'load_server_list',
    meta: {
      ajax: true,
      url: '/getSelectDeviceList.do'
    }
  }
}
