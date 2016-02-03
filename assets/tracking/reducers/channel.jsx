import _ from 'lodash'

function classifyChannels(channels) {
  let preset = []
  let custom = []

  for (let i = 0; i < channels.length; i++) {
    switch (channels[i].type) {
    case 0 :
      preset.push(channels[i])
      break
    case 1 :
      custom.push(channels[i])
      break
    default:
      break
    }
  }

  return {preset, custom}
}

const initialState = {
  items: [],
  presetChannels: [],
  customChannels: [],
  downloadUrlNames: []
}

export default function(state = initialState, action) {
  switch (action.type) {
  case 'get_channels':
    return _.assign({}, state, {
      loadingItemsDone: true
    })

  case 'get_channels_ok':
    return _.assign({}, state, {
      items: [
        ...action.payload.content.content
      ],
      totalPage: action.payload.content.totalPage,
      totalRecord: action.payload.content.totalRecord,
      loading: false
    })

  case 'get_channels_error':
    alert(action.payload.content)
    return state

  case 'get_campaigns_ok':
    let channelGco = state.items
    const iGco = channelGco.findIndex((e) => {
      return e.channelId === action.meta.original.channelId
    })
    channelGco[iGco].campaigns = action.payload.content.content
    return _.assign({}, state, {
      items: channelGco
    })

  case 'get_campaigns_error':
    alert(action.payload.content)
    return state

  case 'get_channel_names':
    return _.assign({}, state, {
      loading: true
    })

  case 'get_channel_names_ok':
    return _.assign({}, state, {
      presetChannels: classifyChannels(action.payload.content).preset,
      customChannels: classifyChannels(action.payload.content).custom,
      loading: false
    })

  case 'get_channel_names_error':
    alert(action.payload.content)
    return state

  case 'select_channel_ok':
    history.back()
    return state

  case 'select_channel_error':
    alert(action.payload.content)
    return state

  case 'create_custom_channel_ok':
    return _.assign({}, state, {
      customChannels: [
        ...state.customChannels,
        {
          channelId: action.payload.content.channelId,
          name: action.payload.content.name,
          type: 1
        }
      ]
    })

  case 'create_custom_channel_error':
    alert(action.payload.content)
    return state

  case 'del_custom_channel_ok':
    let resDcco = {}
    let customChannelsDco = state.customChannels
    const iDco = _.findIndex(customChannelsDco, (element) => {
      return element.channelId === action.meta.original.channelId
    })
    customChannelsDco.splice(iDco, 1)
    resDcco = _.assign({}, state, {
      customChannels: customChannelsDco
    })
    return resDcco

  case 'del_custom_channel_error':
    alert(action.payload.content)
    return state

  case 'create_campaign_ok':
    let resCco = {}
    let channelsCco = state.items
    const iCduo = _.findIndex(channelsCco, (element) => {
      return element.channelId === action.payload.content.channelId
    })
    channelsCco[iCduo].campaigns.push({
      id: action.payload.content.campaignId,
      name: action.payload.content.name,
      downloadUrl: action.payload.content.downloadUrl,
      trackUrl: action.payload.content.trackUrl
    })
    resCco = _.assign({}, state, {
      items: channelsCco
    })

    return resCco

  case 'create_campaign_error':
    alert(action.payload.content)
    return state

  case 'edit_campaign_ok':
    let resEco = {}
    let channelsEco = state.items
    const iEco = _.findIndex(channelsEco, (element) => {
      return element.id === action.payload.channelId
    })
    let jEco = _.findIndex(channelsEco[iEco].campaigns, (element) => {
      return element.id === action.payload.id
    })
    channelsEco[iEco].campaigns[jEco] = {
      channelId: action.payload.channelId,
      campaignId: action.payload.campaignId,
      name: action.payload.name,
      downloadUrl: action.payload.downloadUrl,
      trackingLink: action.payload.trackingLink,
    }
    resEco = _.assign({}, state, {
      items: [
        ...channelsEco
      ]
    })
    return resEco

  case 'edit_campaign_error':
    alert(action.payload.content)
    return state

  case 'del_campaign_ok':
    let resDco = {}
    let channelsDco = state.items
    const iDduo = _.findIndex(channelsDco, (element) => {
      return element.channelId === action.meta.original.channelId
    })
    const jDduo = _.findIndex(channelsDco[iDduo].campaigns, (element) => {
      return element.campaignId === action.meta.original.campaignId
    })
    channelsDco[iDduo].campaigns.splice(jDduo, 1)
    resDco = _.assign({}, state, {
      items: [
        ...channelsDco
      ]
    })
    return resDco

  case 'del_campaign_error':
    alert(action.payload.content)
    return state

  case 'get_download_url_names_ok':
    return _.assign({}, state, {
      downloadUrlNames: action.payload.content
    })

  case 'get_download_url_names_error':
    alert(action.payload.content)
    return state

  case 'del_channel_ok':
    let resDco2 = {}
    const iDso = _.findIndex(state.items, (e) => {
      return e.channelId === action.meta.original.channelId
    })
    resDco2 = _.assign({}, state, {
      items: [
        ...state.items.slice(0, iDso),
        ...state.items.slice(iDso + 1)
      ]
    })
    return resDco2

  case 'del_channel_error':
    alert(action.payload.content)
    return state

  default:
    return state
  }
}
