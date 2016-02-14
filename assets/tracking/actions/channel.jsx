export function getChannelNames(payload) {
  return {
    type: 'get_channel_names',
    payload,
    meta: {
      ajax: true,
      url: '/getChannelNames.do'
    }
  }
}

export function getChannels(payload) {
  return {
    type: 'get_channels',
    payload,
    meta: {
      ajax: true,
      url: '/getChannels.do'
    }
  }
}

export function selectChannel(payload) {
  return {
    type: 'select_channel',
    payload,
    meta: {
      ajax: true,
      url: '/selectChannel.do'
    }
  }
}

export function delChannel(info) {
  return {
    type: 'del_channel',
    payload: info,
    meta: {
      ajax: true,
      url: '/delChannel.do',
      original: info
    }
  }
}

export function createCustomChannel(payload) {
  return {
    type: 'create_custom_channel',
    payload,
    meta: {
      ajax: true,
      url: '/createCustomChannel.do'
    }
  }
}

export function delCustomChannel(info) {
  return {
    type: 'del_custom_channel',
    payload: info,
    meta: {
      ajax: true,
      url: '/delCustomChannel.do',
      original: info
    }
  }
}

export function createCampaign(payload) {
  return {
    type: 'create_campaign',
    payload,
    meta: {
      ajax: true,
      url: '/createCampaign.do'
    }
  }
}

export function editCampaign(info) {
  return {
    type: 'edit_campaign',
    payload: info,
    meta: {
      ajax: true,
      url: '/editCampaign.do',
      original: info
    }
  }
}

export function delCampaign(info) {
  return {
    type: 'del_campaign',
    payload: info,
    meta: {
      ajax: true,
      url: '/delCampaign.do',
      original: info
    }
  }
}

export function getCampaigns(info) {
  return {
    type: 'get_campaigns',
    payload: info,
    meta: {
      ajax: true,
      url: '/getCampaigns.do',
      original: info
    }
  }
}

export function getDownloadUrlNames(payload) {
  return {
    type: 'get_download_url_names',
    payload,
    meta: {
      ajax: true,
      url: '/getDownloadUrlNames.do'
    }
  }
}
