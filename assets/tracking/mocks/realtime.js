export function overviewChannelRealTimeData(mock) {
  mock.post('/overviewChannelRealTimeData.do', function(req) {
    return {
      body: {
        'ID': '1450776191817902',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '今日累计活跃',
          'y4': '今日累计付费'
        },
        'content': [{
          // 'y0': (Math.random() * 1000).toFixed(0),
          'y0': 32,
          'y1': 246,
          'y2': 0.0865,
          'y3': 1,
          'y4': 3,
          'x': 'jd_test'
        }, {
          'y0': 2868,
          'y1': 2,
          'y2': 0.7,
          'y3': 4,
          'y4': 4,
          'x': 'yingyongbao'
        }, {
          'id': '-',
          'y0': 10,
          'y1': 'N/A',
          'y2': 0.4,
          'y3': 0.1667,
          'y4': 1,
          'x': '自然流量'
        }]
      }
    }
  })
}

export function overviewCampaignRealTimeData(mock) {
  mock.post('/overviewCampaignRealTimeData.do', function(req) {
    return {
      body: {
        'ID': '1450491095607319',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '今日累计活跃',
          'y4': '今日累计付费'
        },
        'content': [{
          'y1': 7,
          'y2': 0.2059,
          'y3': 0,
          'y4': 0,
          'y0': 34,
          'x': 'aeE7B3'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'QV7Jvu'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 12334,
          'x': 'R3miui'
        }]
      }
    }
  })
}

export function overviewPublisherRealTimeData(mock) {
  mock.post('/overviewPublisherRealTimeData.do', function(req) {
    return {
      body: {
        'ID': '1450491203146328',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '今日累计活跃',
          'y4': '今日累计付费'
        },
        'content': [{
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 2,
          'x': '123'
        }, {
          'y1': 7,
          'y2': 0.7,
          'y3': 0,
          'y4': 0,
          'y0': 10,
          'x': '77777'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'hello'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'hello1'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'helloworld'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'p1'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'test'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'thomas'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 17,
          'x': 'world'
        }]
      }
    }
  })
}

export function overviewSiteRealTimeData(mock) {
  mock.post('/overviewSiteRealTimeData.do', function(req) {
    return {
      body: {
        'ID': '1450491692927929',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '今日累计活跃',
          'y4': '今日累计付费'
        },
        'content': [{
          'y1': 0,
          'y2': 0,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'left'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'right'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'right1'
        }, {
          'y1': 0,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'right2'
        }]
      }
    }
  })
}

export function overviewTopNChannelRealTimeData(mock) {
  mock.post('/overviewTopNChannelRealTimeData.do', function(req) {
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

export function overviewTotalTopNChannelRealTimeData(mock) {
  mock.post('/overviewTotalTopNChannelRealTimeData.do', function(req) {
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
