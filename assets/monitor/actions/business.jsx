export function getBusinessList(info) {
  return {
    payload:info,
    type: 'get_business',
    meta: {
      ajax: true,
      url: '/getBusinessList.do',
      original:info
    }
  }
}

export function addBusiness(info) {
  return {
    payload:info,
    type: 'add_business',
    meta: {
      ajax: true,
      url: '/addBusiness.do',
      original:info
    }
  }
}

export function updateBusiness(payload) {
  return {
    payload,
    type: 'update_business',
    meta: {
      ajax: true,
      url: '/updateBusiness.do'
    }
  }
}

export function deleteBusiness(info) {
  return {
    payload:info,
    type:'delete_business',
    meta: {
      ajax: true,
      url: '/deleteBusiOrModule.do',
      original:info
    }
  }
}

export function addModule(info) {
  return {
    payload:info,
    type:'add_module',
    meta: {
      ajax: true,
      url: '/addModule.do',
      original:info
    }
  }
}

export function deleteModule(info) {
  return {
    payload:info,
    type: 'delete_module',
    meta: {
      ajax: true,
      url: '/deleteBusiOrModule.do',
      original:info
    }
  }
}

export function nextPage(payload) {
  return {
    payload,
    type: 'next_page',
  }
}

export function getEmployeeSelectData(payload) {
  return {
    payload,
    type: 'select_employee',
    meta: {
      ajax: true,
      url: '/getEmployeeSelectData.do'
    }
  }
}
