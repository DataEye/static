function classifyStores(stores) {
  let preset = []
  let custom = []

  for (let i = 0; i < stores.length; i++) {
    switch (stores[i].type) {
    case 0 :
      preset.push(stores[i])
      break
    case 1 :
      custom.push(stores[i])
      break
    default:
      break
    }
  }

  return {preset, custom}
}

export default function(state = {
  loading: false,
  items: [],
  presetStores: [],
  customStores: []
}, action) {
  switch (action.type) {

  case 'get_stores':
    return Object.assign({}, state, {
      loading: true
    })

  case 'get_stores_ok':
    return Object.assign({}, state, {
      items: [
        ...action.payload.content.content
      ],
      totalPage: action.payload.content.totalPage,
      totalRecord: action.payload.content.totalRecord,
      loading: false
    })

  case 'get_stores_error':
    alert(action.payload.content)
    return state

  case 'get_download_urls_ok':
    let storesGduo = state.items
    const iGduo = storesGduo.findIndex((e, i, a) => {
      return e.id === action.payload.storeId
    })
    storesGduo[iGduo].downloadUrls = action.payload.content.content
    return Object.assign({}, state, {
      items: storesGduo
    })

  case 'get_download_urls_error':
    alert(action.payload.content)
    return state

  case 'get_store_names':
    return Object.assign({}, state, {
      loading: true
    })

  case 'get_store_names_ok':
    return Object.assign({}, state, {
      presetStores: [
        ...classifyStores(action.payload.content).preset
      ],
      customStores: [
        ...classifyStores(action.payload.content).custom
      ],
      loading: false
    })

  case 'get_store_names_error':
    alert(action.payload.content)
    return state

  case 'select_store_ok':
    history.back()
    return state

  case 'select_error':
    alert(action.payload.content)
    return state

  case 'create_custom_store_ok':
    return Object.assign({}, state, {
      customStores: [
        ...state.customStores,
        {
          id: action.payload.content.id,
          name: action.payload.content.name,
          type: 1
        }
      ]
    })

  case 'create_custom_store_error':
    alert(action.payload.content)
    return state

  case 'del_custom_store_ok':
    let customStoresDco = state.customStores
    const iDco = customStoresDco.findIndex((element, index, array) => {
      return element.id === action.payload.id
    })
    customStoresDco.splice(iDco, 1)
    return Object.assign({}, state, {
      customStores: customStoresDco
    })

  case 'del_custom_store_error':
    return state

  case 'create_download_url_ok':
    let storesCduo = state.items
    const iCduo = storesCduo.findIndex((element, index, array) => {
      return element.id === action.payload.content.storeId
    })
    storesCduo[iCduo].downloadUrls.push({
      name: action.payload.content.name,
      link: action.payload.content.link,
      id: action.payload.content.id
    })

    return Object.assign({}, state, {
      items: [
        ...storesCduo
      ]
    })

  case 'create_download_url_error':
    alert(action.payload.content)
    return state

  case 'edit_download_url_ok':
    let storesEduo = state.items
    const iEduo = storesEduo.findIndex((element, index, array) => {
      return element.id === action.payload.content.storeId
    })
    let jEduo = storesEduo[iEduo].downloadUrls.findIndex((element, index, array) => {
      return element.id === action.payload.content.id
    })
    storesEduo[iEduo].downloadUrls[jEduo] = {
      id: action.payload.content.id,
      link: action.payload.content.link,
      name: action.payload.content.name
    }
    return Object.assign({}, state, {
      items: [
        ...storesEduo
      ]
    })

  case 'edit_download_url_error':
    alert(action.payload.content)
    return state

  case 'del_download_url_ok':
    let storesDduo = state.items
    const iDduo = storesDduo.findIndex((element) => {
      return element.id === action.meta.original.storeId
    })
    const jDduo = storesDduo[iDduo].downloadUrls.findIndex((element) => {
      return element.id === action.meta.original.id
    })
    storesDduo[iDduo].downloadUrls.splice(jDduo, 1)
    const resDduo = Object.assign({}, state, {
      items: [
        ...storesDduo
      ]
    })
    return resDduo

  case 'del_download_url_error':
    alert(action.payload.content)
    return state

  case 'del_store_ok':
    let resDso = {}
    const iDso = state.items.findIndex((e, i, a) => {
      return e.id === action.payload.content.id
    })
    resDso = Object.assign({}, state, {
      items: [
        ...state.items.slice(0, iDso),
        ...state.items.slice(iDso + 1)
      ]
    })
    return resDso

  case 'del_store_error':
    alert(action.payload.content)
    return state

  default:
    return state
  }
}
