import _ from 'lodash'

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
    return _.assign({}, state, {
      loading: true
    })

  case 'get_stores_ok':
    return _.assign({}, state, {
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
    const iGduo = _.findIndex(storesGduo, (e) => {
      return e.id === action.meta.original.storeId
    })
    storesGduo[iGduo].downloadUrls = action.payload.content.content
    return _.assign({}, state, {
      items: storesGduo
    })

  case 'get_download_urls_error':
    alert(action.payload.content)
    return state

  case 'get_store_names':
    return _.assign({}, state, {
      loading: true
    })

  case 'get_store_names_ok':
    return _.assign({}, state, {
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
    return _.assign({}, state, {
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
    const iDco = _.findIndex(customStoresDco, (element, index, array) => {
      return element.id === action.meta.original.id
    })
    customStoresDco.splice(iDco, 1)
    return _.assign({}, state, {
      customStores: customStoresDco
    })

  case 'del_custom_store_error':
    return state

  case 'create_download_url_ok':
    let storesCduo = state.items
    const iCduo = _.findIndex(storesCduo, (element, index, array) => {
      return element.id === action.payload.content.storeId
    })
    storesCduo[iCduo].downloadUrls.push({
      name: action.payload.content.name,
      link: action.payload.content.link,
      id: action.payload.content.id
    })

    return _.assign({}, state, {
      items: [
        ...storesCduo
      ]
    })

  case 'create_download_url_error':
    alert(action.payload.content)
    return state

  case 'edit_download_url_ok':
    let storesEduo = state.items
    const iEduo = _.findIndex(storesEduo, (element) => {
      return element.id === action.payload.content.storeId
    })
    let jEduo = _.findIndex(storesEduo[iEduo].downloadUrls, (element) => {
      return element.id === action.payload.content.id
    })
    storesEduo[iEduo].downloadUrls[jEduo] = {
      id: action.payload.content.id,
      link: action.payload.content.link,
      name: action.payload.content.name
    }
    return _.assign({}, state, {
      items: [
        ...storesEduo
      ]
    })

  case 'edit_download_url_error':
    alert(action.payload.content)
    return state

  case 'del_download_url_ok':
    let storesDduo = state.items
    const iDduo = _.findIndex(storesDduo, (element) => {
      return element.id === action.meta.original.storeId
    })
    const jDduo = _.findIndex(storesDduo[iDduo].downloadUrls, (element) => {
      return element.id === action.meta.original.id
    })
    storesDduo[iDduo].downloadUrls.splice(jDduo, 1)
    const resDduo = _.assign({}, state, {
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
    const iDso = _.findIndex(state.items, (e) => {
      return e.id === action.payload.content.id
    })
    resDso = _.assign({}, state, {
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
