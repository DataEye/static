export function mockOverviewChannelLtv(mock) {
  mock.post('/overviewChannelLtv.do', function(req) {
    return {
      body: {
        'ID': '1450948624675694',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '付费',
          'y4': '人均LTV'
        },
        'content': [{
          'y1': 0,
          'y2': 0,
          'y3': 700,
          'y4': 1.34,
          'y0': 0,
          'x': 'hahh'
        }, {
          'y1': 246,
          'y2': 16.0679,
          'y3': 700,
          'y4': 2.8455,
          'y0': 1531,
          'x': 'jd_test'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 1500,
          'y4': 1.824,
          'y0': 0,
          'x': 'thomas-test'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 700,
          'y4': 1.56,
          'y0': 2053,
          'x': 'yingyongbao'
        }, {
          'y1': 4,
          'y2': 40,
          'y3': 0,
          'y4': 0,
          'y0': 10,
          'x': 'yuanlin2'
        }]
      }
    }
  })
}

export function mockOverviewCampaignLtv(mock) {
  mock.post('/overviewCampaignLtv.do', function(req) {
    return {
      body: {
        'ID': '1450950232572750',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '付费',
          'y4': '人均LTV'
        },
        'content': [{
          'y1': 0,
          'y2': 0,
          'y3': 700,
          'y0': 0,
          'x': 'aabbc'
        }, {
          'y1': 3094,
          'y2': 154700,
          'y3': 0,
          'y4': 0,
          'y0': 2,
          'x': 'aeE7B3'
        }, {
          'y1': 684,
          'y2': 33.3496,
          'y3': 0,
          'y4': 0,
          'y0': 2051,
          'x': 'R3miui'
        }]
      }
    }
  })
}

export function mockOverviewPublisherLtv(mock) {
  mock.post('/overviewPublisherLtv.do', function(req) {
    return {
      body: {
        'ID': '1450951209056236',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '付费',
          'y4': '人均LTV'
        },
        'content': [{
          'y1': 1430,
          'y2': 143000,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'hello'
        }, {
          'y1': 234,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'helloworld'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 700,
          'y0': 0,
          'x': 'thomas-test'
        }, {
          'y1': 1430,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'world'
        }]
      }
    }
  })
}

export function mockOverviewSiteLtv(mock) {
  mock.post('/overviewSiteLtv.do', function(req) {
    return {
      body: {
        'ID': '1450951751812669',
        'statusCode': 200,
        'name': {
          'y0': '点击',
          'y1': '激活',
          'y2': '转化率',
          'y3': '付费',
          'y4': '人均LTV'
        },
        'content': [{
          'y1': 451,
          'y2': 45100,
          'y3': 0,
          'y4': 0,
          'y0': 1,
          'x': 'left'
        }, {
          'y1': 512,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'right'
        }, {
          'y1': 233,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'right1'
        }, {
          'y1': 234,
          'y3': 0,
          'y4': 0,
          'y0': 0,
          'x': 'right2'
        }, {
          'y1': 0,
          'y2': 0,
          'y3': 700,
          'y0': 0,
          'x': 'thomas-site'
        }]
      }
    }
  })
}

export function mockCoreLTV(mock) {
  mock.post('/queryLTVByAppid.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': [{
          'adNetWorkID': '1',
          'adNetWorkName': 'yeahMobi',
          'clickNum': 10,
          'activeNum': 10,
          'clickValueRate': 0.11,
          'pay': 10,
          'ltv': 10,
          'regNum': 200
        }, {
          'adNetWorkID': '1235',
          'adNetWorkName': 'inMobi',
          'clickNum': 20,
          'activeNum': 20,
          'clickValueRate': 0.22,
          'pay': 20,
          'ltv': 20,
          'regNum': 120
        }]
      }
    }
  })
}

export function mockCoreLTVByAdNetwork(mock) {
  mock.post('/queryLTVByAdNetworkID.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': [{
          'campaignID': '11',
          'campaignName': 'yeahMobi-sub1',
          'clickNum': 10,
          'activeNum': 10,
          'clickValueRate': 0.11,
          'pay': 10,
          'ltv': 10,
          'regNum': 200
        }, {
          'campaignID': '12351',
          'campaignName': 'yeahMobi-sub2',
          'clickNum': 20,
          'activeNum': 20,
          'clickValueRate': 0.22,
          'pay': 20,
          'ltv': 20,
          'regNum': 120
        }]
      }
    }
  })
}

export function mockCoreLTVTopNByChannel(mock) {
  mock.post('/overviewTopNChannelLtv.do', function(req) {
    return {
      body: {
        'ID': '1451022535676920',
        'statusCode': 200,
        'name': {
          'y0': 'yingyongbao',
          'y1': 'jd_test',
          'y2': 'yuanlin2'
        },
        'content': [{
          'y0': 3778,
          'y1': 992,
          'y2': 4,
          'x': '激活推广'
        }, {
          'y0': 12,
          'y1': 23,
          'y2': 12,
          'x': '注册设备'
        }, {
          'y0': 12,
          'y1': 12,
          'y2': 12,
          'x': '登陆次数'
        }, {
          'y0': 800,
          'y1': 700,
          'y2': 700,
          'x': '付费设备'
        }, {
          'y0': 100,
          'y1': 200,
          'y2': 300,
          'x': '付费次数'
        }]
      }
    }
  })
}

export function mockCoreLTVTopNByTotal(mock) {
  mock.post('/overviewTotalTopNChannelLtv.do', function(req) {
    return {
      body: {
        'ID': '1451022617248201',
        'statusCode': 200,
        'name': {
          'y0': 'num'
        },
        'content': [{
          'y0': 4774,
          'x': '激活推广'
        }, {
          'y0': 47,
          'x': '注册设备'
        }, {
          'y0': 36,
          'x': '登陆次数'
        }, {
          'y0': 2200,
          'x': '付费设备'
        }, {
          'y0': 200,
          'x': '付费次数'
        }]
      }
    }
  })
}

export function mockOverviewClickRatioLtv(mock) {
  mock.post('/overviewClickRatioLtv.do', function(req) {
    return {
      body: {
        'ID': '1451022816822726',
        'statusCode': 200,
        'name': {
          'z0': 'ratio',
          'y0': 'num'
        },
        'content': [{
          'z0': 42.5988,
          'y0': 1531,
          'x': 'jd_test'
        }, {
          'z0': 57.123,
          'y0': 2053,
          'x': 'yingyongbao'
        }, {
          'z0': 0.2782,
          'y0': 10,
          'x': 'yuanlin2'
        }]
      }
    }
  })
}

export function mockOverviewActiveRatioLtv(mock) {
  mock.post('/overviewActiveRatioLtv.do', function(req) {
    return {
      body: {
        'ID': '1451023247526923',
        'statusCode': 200,
        'name': {
          'z0': 'ratio',
          'y0': 'num'
        },
        'content': [{
          'z0': 20.7792,
          'y0': 992,
          'x': 'jd_test'
        }, {
          'z0': 79.137,
          'y0': 3778,
          'x': 'yingyongbao'
        }, {
          'z0': 0.0838,
          'y0': 4,
          'x': 'yuanlin2'
        }]
      }
    }
  })
}

export function mockOverviewRevenueRatioLtv(mock) {
  mock.post('/overviewRevenueRatioLtv.do', function(req) {
    return {
      body: {
        'ID': '1451023247526923',
        'statusCode': 200,
        'name': {
          'z0': 'ratio',
          'y0': 'num'
        },
        'content': [{
          'z0': 49.7792,
          'y0': 992,
          'x': 'taobao_test'
        }, {
          'z0': 50.137,
          'y0': 3778,
          'x': 'kaka'
        }, {
          'z0': 0.0838,
          'y0': 4,
          'x': 'yxz'
        }]
      }
    }
  })
}
