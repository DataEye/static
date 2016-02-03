export function mockRetain(mock) {
  mock.post('/getChannels.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {
          'totalRecord': 32,
          'pageSize': 10,
          'totalPage': 1,
          'pageID': 1,
          'content': [{
            'channelId': '82375824',
            'name': '101GBS',
            'visible': 1,
            'type': 0,
            'campaigns': [{
              'campaignId': '1231',
              'name': 'activity',
              'downloadUrl': 'http://',
              'trackUrl': 'http://'
            }, {
              'campaignId': '12314',
              'name': 'activity',
              'downloadUrl': 'http:///',
              'trackUrl': 'http://'
            }]
          }, {
            'channelId': '82375823',
            'name': 'absmobi',
            'visible': 1,
            'type': 0,
            'campaigns': [{
              'campaignId': '12313',
              'name': 'activity',
              'downloadUrl': 'http:///',
              'trackUrl': 'http://'
            }, {
              'campaignId': '123133',
              'name': 'activity',
              'downloadUrl': 'http:///',
              'trackUrl': 'http://'
            }]
          }]
        }
      }
    }
  })

  mock.post('/getChannelNames.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': [{
          'channelId': '82375824',
          'name': '101GBS',
          'visible': 1,
          'type': 0
        }, {
          'channelId': '823758232',
          'name': 'absmobi',
          'visible': 1,
          'type': 0
        }, {
          'channelId': '98775',
          'name': '自定义广告网络1',
          'visible': 1,
          'type': 1
        }]
      }
    }
  })

  mock.post('/delChannel.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/selectChannel.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/createCustomChannel.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {
          id: 100
        }
      }
    }
  })

  mock.post('/delCustomChannel.do', function() {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/createCampaignBefore.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {
          id: 'aeE7B3',
          trackUrl: 'http://119.147.212.251:17080/aeE7B3',
          postBackLink: 'http://119.147.212.251:17080'
        }
      }
    }
  })

  mock.post('/createCampaign.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/editCampaign.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/delCampaign.do', function(req) {
    let res = {}
    if (req.body.uid && req.body.id && req.body.channelId) {
      res = {
        body: {
          'statusCode': 200,
          'content': {}
        }
      }
    } else {
      res = {
        body: {
          'statusCode': 400,
          'content': {}
        }
      }
    }
    return res
  })

  mock.post('/getDownloadUrlNames.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': [
          {
            'id': 82375824,
            'name': 'app store',
            'type': 0,
            'downloadUrls': [
              {
                'id': 1,
                'name': '跳转链接'
              },
              {
                'id': 2,
                'name': '下载链接'
              }
            ]
          },
          {
            'id': 82375824,
            'name': 'google play',
            'type': 0,
            'downloadUrls': [
              {
                'id': 3,
                'name': '跳转链接'
              },
              {
                'id': 4,
                'name': '下载链接'
              }
            ]
          }
        ]
      }
    }
  })
}
