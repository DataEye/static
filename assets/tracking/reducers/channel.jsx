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

// function removeSelectedChannel(presetChannels, customChannels, selectedChannelId) {
//   let preset = presetChannels
//   let custom = customChannels
//   const iSco1 = preset.findIndex((e, i, a) => {
//     return e.channelId === selectedChannelId
//   })
//   const iSco2 = custom.findIndex((e, i, a) => {
//     return e.channelId === selectedChannelId
//   })
//   if (iSco1 >= 0) {
//     preset.splice(iSco1, 1)
//   }
//   if (iSco2 >= 0) {
//     custom.splice(iSco2, 1)
//   }

//   return {preset, custom}
// }

export default function(state = {
  items: [],
  loadingItemsDone: false,
  presetChannels: [],
  customChannels: [],
  downloadUrlNames: [],
  delCampaignFailed: false
}, action) {
  switch (action.type) {

  case 'get_channels':
    return Object.assign({}, state, {
      loadingItemsDone: true
    })

  case 'get_channels_ok':
    return Object.assign({}, state, {
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
    const iGco = channelGco.findIndex((e, i, a) => {
      return e.channelId === action.payload.channelId
    })
    channelGco[iGco].campaigns = action.payload.content.content
    return Object.assign({}, state, {
      items: channelGco
    })

  case 'get_campaigns_error':
    alert(action.payload.content)
    return state

  case 'get_channel_names':
    return Object.assign({}, state, {
      loading: true
    })

  case 'get_channel_names_ok':
    return Object.assign({}, state, {
      presetChannels: classifyChannels(action.payload.content).preset,
      customChannels: classifyChannels(action.payload.content).custom,
      loading: false
    })

  case 'get_channel_names_error':
    alert(action.payload.content)
    return state

  case 'select_channel_ok':
    // const channelsSco = removeSelectedChannel(state.presetChannels, state.customChannels, action.payload.channelId)
    history.back()
    return Object.assign({}, state, {
      // items: [
      //   ...state.items,
      //   {
      //     id: action.payload.id,
      //     name: action.payload.name,
      //     type: action.payload.type,
      //     campaigns: []
      //   }
      // ],
      // presetChannels: channelsSco.preset,
      // customChannels: channelsSco.custom
    })

  case 'select_channel_error':
    alert(action.payload.content)
    return state

  case 'create_custom_channel_ok':
    return Object.assign({}, state, {
      customChannels: [
        ...state.customChannels,
        {
          id: action.payload.content.id,
          name: action.payload.name,
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
    const iDco = customChannelsDco.findIndex((element, index, array) => {
      return element.channelId === action.meta.original.channelId
    })
    customChannelsDco.splice(iDco, 1)
    resDcco = Object.assign({}, state, {
      customChannels: customChannelsDco
    })
    return resDcco

  case 'del_custom_channel_error':
    alert(action.payload.content)
    return state

  case 'create_campaign_ok':
    let resCco = {}
    let channelsCco = state.items
    const iCduo = channelsCco.findIndex((element, index, array) => {
      return element.channelId === action.payload.content.channelId
    })
    channelsCco[iCduo].campaigns.push({
      id: action.payload.content.campaignId,
      name: action.payload.content.name,
      downloadUrl: action.payload.content.downloadUrl,
      trackUrl: action.payload.content.trackUrl
    })
    resCco = Object.assign({}, state, {
      items: channelsCco
    })

    return resCco

  case 'create_campaign_error':
    alert(action.payload.content)
    return state

  case 'edit_campaign_ok':
    let resEco = {}
    let channelsEco = state.items
    const iEco = channelsEco.findIndex((element, index, array) => {
      return element.id === action.payload.channelId
    })
    let jEco = channelsEco[iEco].campaigns.findIndex((element, index, array) => {
      return element.id === action.payload.id
    })
    channelsEco[iEco].campaigns[jEco] = {
      channelId: action.payload.channelId,
      campaignId: action.payload.campaignId,
      name: action.payload.name,
      downloadUrl: action.payload.downloadUrl,
      trackingLink: action.payload.trackingLink,
    }
    resEco = Object.assign({}, state, {
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
    const iDduo = channelsDco.findIndex((element, index, array) => {
      return element.channelId === action.meta.original.channelId
    })
    const jDduo = channelsDco[iDduo].campaigns.findIndex((element, index, array) => {
      return element.campaignId === action.meta.original.campaignId
    })
    channelsDco[iDduo].campaigns.splice(jDduo, 1)
    resDco = Object.assign({}, state, {
      items: [
        ...channelsDco
      ]
    })
    return resDco

  case 'del_campaign_error':
    alert(action.payload.content)
    return state

  case 'get_download_url_names_ok':
    return Object.assign({}, state, {
      downloadUrlNames: action.payload.content
    })

  case 'get_download_url_names_error':
    alert(action.payload.content)
    return state

  case 'del_channel_ok':
    let resDco2 = {}
    const iDso = state.items.findIndex((e, i, a) => {
      return e.channelId === action.meta.original.channelId
    })
    resDco2 = Object.assign({}, state, {
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
