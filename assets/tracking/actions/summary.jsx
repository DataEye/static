export function getOverviewAppSummary(payload) {
  return {
    type: 'getOverviewAppSummary',
    payload,
    meta: {
      ajax: true,
      url: '/overviewappsummary.do'
    }
  }
}

export function getOverviewActiveRate(payload) {
  return {
    type: 'getOverviewActiveRate',
    payload,
    meta: {
      ajax: true,
      url: '/overviewActiveRate.do'
    }
  }
}

export function getOverviewInstallRatio(payload) {
  return {
    type: 'getOverviewInstallRatio',
    payload,
    meta: {
      ajax: true,
      url: '/overviewInstallRatio.do'
    }
  }
}

export function getOverviewChannelSummaryBuAppId(payload) {
  return {
    type: 'getOverviewChannelSummaryBuAppId',
    payload,
    meta: {
      ajax: true,
      url: '/overviewchannelsummarybyappid.do'
    }
  }
}

export function queryCampaignSummary(payload) {
  return {
    type: 'queryCampaignSummary',
    payload,
    meta: {
      ajax: true,
      url: '/queryCampaignSummary.do'
    }
  }
}

export function getOverviewPublisherSummaryByCampaign(payload) {
  return {
    type: 'getOverviewPublisherSummaryByCampaign',
    payload,
    meta: {
      ajax: true,
      url: '/overviewpublishersummarybycampaign.do'
    }
  }
}

export function getOverviewSiteSummaryByPublisher(payload) {
  return {
    type: 'getOverviewSiteSummaryByPublisher',
    payload,
    meta: {
      ajax: true,
      url: '/overviewsitesummarybypublisher.do'
    }
  }
}

export function getOverviewChannelSummaryByEventId(payload) {
  return {
    type: 'getOverviewChannelSummaryByEventId',
    payload,
    meta: {
      ajax: true,
      url: '/overviewchannelsummarybyeventid.do'
    }
  }
}

export function getOverviewTotalChannelSummaryByEventId(payload) {
  return {
    type: 'getOverviewTotalChannelSummaryByEventId',
    payload,
    meta: {
      ajax: true,
      url: '/overviewTotalChannelSummaryByEventid.do'
    }
  }
}

export function getOverviewPayUserRatio(payload) {
  return {
    type: 'getOverviewPayUserRatio',
    payload,
    meta: {
      ajax: true,
      url: '/overviewPayUserRatio.do'
    }
  }
}

export function getOverviewRevenueRatio(payload) {
  return {
    type: 'getOverviewRevenueRatio',
    payload,
    meta: {
      ajax: true,
      url: '/overviewRevenueRatio.do'
    }
  }
}
