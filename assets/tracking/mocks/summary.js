export function overviewAppSummary(mock) {
  mock.post('/overviewappsummary.do', function(req) {
    return {
      body: {
        'ID': '1450501149221804',
        'statusCode': 200,
        'glance': [{
          'k': '点击',
          'v': 5723
        }, {
          'k': '推广安装',
          'v': 250
        }, {
          'k': '自然安装',
          'v': 2
        }],
        'name': {
          'y0': '点击',
          'y1': '推广安装',
          'y2': '自然安装',
          'z2': '总安装'
        },
        'content': [{
          'y0': 0,
          'y1': 0,
          'y2': 0,
          'z2': 0,
          'x': '20151020'
        }, {
          'y1': 127,
          'y2': 1,
          'z2': 128,
          'y0': 1169,
          'x': '20151021'
        }, {
          'y1': 123,
          'y2': 0,
          'z2': 123,
          'y0': 1138,
          'x': '20151022'
        }, {
          'y1': 0,
          'y2': 1,
          'z2': 1,
          'y0': 1140,
          'x': '20151023'
        }, {
          'y1': 0,
          'y2': 0,
          'z2': 0,
          'y0': 1138,
          'x': '20151024'
        }, {
          'y1': 0,
          'y2': 0,
          'z2': 0,
          'y0': 1138,
          'x': '20151025'
        }]
      }
    }
  })
}

export function overviewActiveRate(mock) {
  mock.post('/overviewActiveRate.do', function(req) {
    return {
      body: {
        'ID': '1450857330117859',
        'statusCode': 200,
        'name': {
          'y0': 'num'
        },
        'content': [{
          'y0': 5723,
          'x': '点击'
        }, {
          'y0': 250,
          'x': '推广安装'
        }, {
          'y0': 2,
          'x': '自然安装'
        }]
      }
    }
  })
}

export function overviewInstallRatio(mock) {
  mock.post('/overviewInstallRatio.do', function(req) {
    return {
      body: {
        'ID': '1450858416204155',
        'statusCode': 200,
        'glance': [{
          'k': '总安装',
          'v': 252
        }],
        'name': {
          'y0': 'num'
        },
        'content': [{
          'y0': 250,
          'x': '推广安装'
        }, {
          'y0': 2,
          'x': '自然安装'
        }]
      }
    }
  })
}

export function overviewChannelSummaryByAppid(mock) {
  mock.post('/overviewchannelsummarybyappid.do', function(req) {
    return {
      body: {
        'ID': '1450776191817902',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '平均日活跃',
          'y4': '付费数',
          'y5': '付费额',
          'y6': '平均ARPU',
          'y7': '平均ARPPU'
        },
        'content': [{
          'y0': 2845,
          'y1': 246,
          'y2': 0.0865,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'x': 'jd_test'
        }, {
          'y0': 2868,
          'y1': 1,
          'y2': 2,
          'y3': 3,
          'y4': 4,
          'y5': 5,
          'x': '自然流量',
          'id': '-'
        }, {
          'y0': 10,
          'y1': 4,
          'y2': 0.4,
          'y3': 0.1667,
          'y4': 1,
          'y5': 22,
          'y6': 2200,
          'y7': 2200,
          'x': 'yuanlin2'
        }]
      }
    }
  })
}

export function overviewCampaignSummaryByChannelid(mock) {
  mock.post('/overviewCampaignSummaryByChannelid.do', function(req) {
    return {
      body: {
        'ID': '1450491095607319',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '平均日活跃',
          'y4': '付费数',
          'y5': '付费额'
          // 'y6': '平均ARPU',
          // 'y7': '平均ARPPU'
        },
        'content': [{
          'y1': 7,
          'y2': 0.2059,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 34,
          'x': 'aeE7B3'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 1,
          'x': 'QV7Jvu'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 12334,
          'x': 'R3miui'
        }]
      }
    }
  })
}

export function overviewPublisherSummaryByCampaign(mock) {
  mock.post('/overviewpublishersummarybycampaign.do', function(req) {
    return {
      body: {
        'ID': '1450491203146328',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '平均日活跃',
          'y4': '付费数',
          'y5': '付费额',
          'y6': '平均ARPU',
          'y7': '平均ARPPU'
        },
        'content': [{
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 2,
          'x': '123'
        }, {
          'y1': 7,
          'y2': 0.7,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 10,
          'x': '77777'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 1,
          'x': 'hello'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 1,
          'x': 'hello1'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 0,
          'x': 'helloworld'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 1,
          'x': 'p1'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 0,
          'x': 'test'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 0,
          'x': 'thomas'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 17,
          'x': 'world'
        }]
      }
    }
  })
}

export function overviewSiteSummaryByPublisher(mock) {
  mock.post('/overviewsitesummarybypublisher.do', function(req) {
    return {
      body: {
        'ID': '1450491692927929',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '平均日活跃',
          'y4': '付费数',
          'y5': '付费额',
          'y6': '平均ARPU',
          'y7': '平均ARPPU'
        },
        'content': [{
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 1,
          'x': 'left'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 0,
          'x': 'right'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 0,
          'x': 'right1'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y5': 0,
          'y0': 0,
          'x': 'right2'
        }]
      }
    }
  })
}

export function overviewChannelSummaryByEventEd(mock) {
  mock.post('/overviewchannelsummarybyeventid.do', function(req) {
    return {
      body: {
        'ID': '1450593449623965',
        'statusCode': 200,
        'name': {
          'y0': 'yingyongbao',
          'y1': 'jd_test',
          'y2': 'yuanlin2'
        },
        'content': [{
          'y1': 569,
          'y2': 10,
          'y0': 590,
          'x': '20151021'
        }, {
          'y1': 569,
          'y2': 0,
          'y0': 569,
          'x': '20151022'
        }, {
          'y1': 569,
          'y2': 0,
          'y0': 571,
          'x': '20151023'
        }, {
          'y1': 569,
          'y2': 0,
          'y0': 569,
          'x': '20151024'
        }, {
          'y1': 569,
          'y2': 0,
          'y0': 569,
          'x': '20151025'
        }]
      }
    }
  })
}

export function overviewTotalChannelSummaryByEventid(mock) {
  mock.post('/overviewTotalChannelSummaryByEventid.do', function(req) {
    return {
      body: {
        'ID': '1450861970909864',
        'statusCode': 200,
        'name': {
          'y0': 'total'
        },
        'content': [{
          'y0': 0,
          'x': '20151020'
        }, {
          'y0': 1169,
          'x': '20151021'
        }, {
          'y0': 1138,
          'x': '20151022'
        }, {
          'y0': 1140,
          'x': '20151023'
        }, {
          'y0': 1138,
          'x': '20151024'
        }, {
          'y0': 1138,
          'x': '20151025'
        }]
      }
    }
  })
}

export function overviewPayUserRatio(mock) {
  mock.post('/overviewPayUserRatio.do', function(req) {
    return {
      body: {
        'ID': '1450927886185393',
        'statusCode': 200,
        'name': {
          'z0': 'ratio',
          'y0': 'num'
        },
        'content': [{
          'z0': 30.6452,
          'y0': 779,
          'x': 'jd_test'
        }, {
          'z0': 64.5161,
          'y0': 1640,
          'x': 'yingyongbao'
        }, {
          'z0': 4.8387,
          'y0': 123,
          'x': 'yuanlin2'
        }]
      }
    }
  })
}

export function overviewRevenueRatio(mock) {
  mock.post('/overviewRevenueRatio.do', function(req) {
    return {
      body: {
        'ID': '1450928375052241',
        'statusCode': 200,
        'name': {
          'z0': 'ratio',
          'y0': 'num'
        },
        'content': [{
          'z0': 31.7768,
          'y0': 12412,
          'x': 'jd_test'
        }, {
          'z0': 62.5909,
          'y0': 24448,
          'x': 'yingyongbao'
        }, {
          'z0': 5.6324,
          'y0': 2200,
          'x': 'yuanlin2'
        }]
      }
    }
  })
}
