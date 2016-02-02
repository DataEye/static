export function getStoreNames(payload) {
  return {
    type: 'get_store_names',
    payload,
    meta: {
      ajax: true,
      url: '/getStoreNames.do'
    }
  }
}

export function getStores(payload) {
  return {
    type: 'get_stores',
    payload,
    meta: {
      ajax: true,
      url: '/getStores.do'
    }
  }
}

export function delStore(payload) {
  return {
    type: 'del_store',
    payload,
    meta: {
      ajax: true,
      url: '/delStore.do'
    }
  }
}

export function selectStore(payload) {
  return {
    type: 'select_store',
    payload,
    meta: {
      ajax: true,
      url: '/selectStore.do'
    }
  }
}

export function createCustomStore(payload) {
  return {
    type: 'create_custom_store',
    payload,
    meta: {
      ajax: true,
      url: '/createCustomStore.do'
    }
  }
}

export function delCustomStore(info) {
  return {
    type: 'del_custom_store',
    payload: info,
    meta: {
      ajax: true,
      url: '/delCustomStore.do',
      original: info
    }
  }
}

export function createDownloadUrl(payload) {
  return {
    type: 'create_download_url',
    payload,
    meta: {
      ajax: true,
      url: '/createDownloadUrl.do'
    }
  }
}

export function editDownloadUrl(payload) {
  return {
    type: 'edit_download_url',
    payload,
    meta: {
      ajax: true,
      url: '/editDownloadUrl.do'
    }
  }
}

export function delDownloadUrl(info) {
  return {
    type: 'del_download_url',
    payload: info,
    meta: {
      ajax: true,
      url: '/delDownloadUrl.do',
      original: info
    }
  }
}

export function getDownloadUrls(info) {
  return {
    type: 'get_download_urls',
    payload: info,
    meta: {
      ajax: true,
      url: '/getDownloadUrls.do',
      original: info
    }
  }
}
