export function mockRetain(mock) {
  mock.post('/getStores.do', function(req) {
    return {
      body: {
        'id': '1450442206784335',
        'statusCode': 200,
        'content': {
          'totalRecord': 32,
          'pageSize': 10,
          'totalPage': 1,
          'pageID': 1,
          'content': [{
            'id': 5,
            'name': '百度云盘',
            'type': 1,
            'storeID': 3,
            'downloadUrls': [{
              'id': 1,
              'name': '商店下载',
              'link': 'http://pan.baidu.com'
            }, {
              'id': 2,
              'name': 'sdjfasfjaslkfjls',
              'link': 'http://pan.baidu.com/asasf'
            }]
          }, {
            'id': 4,
            'name': '千度地盘',
            'type': 0,
            'downloadUrls': [{
              'id': 1,
              'name': '商店下载',
              'link': 'http://pan.qiandu.com'
            }]
          }, {
            'id': 10,
            'name': '千度地盘',
            'type': 0,
            'downloadUrls': [{
              'id': 1,
              'name': '商店下载',
              'link': 'http://pan.qiandu.com'
            }]
          }, {
            'id': 6,
            'name': '千度地盘',
            'type': 0,
            'downloadUrls': [{
              'id': 1,
              'name': '商店下载',
              'link': 'http://pan.qiandu.com'
            }]
          }, {
            'id': 7,
            'name': '千度地盘',
            'type': 0,
            'downloadUrls': [{
              'id': 1,
              'name': '商店下载',
              'link': 'http://pan.qiandu.com'
            }]
          }]
        }
      }
    }
  })

  mock.post('/selectStore.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/delStore.do', function(req) {
    return {
      body: {
        id: '123141234124124',
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/getStoreNames.do', function(req) {
    return {
      body: {
        'statusCode': '200',
        'content': [{
          'id': 82375824,
          'name': 'appstore',
          'type': 0
        }, {
          'id': 98775824,
          'name': '豌豆荚',
          'type': 0
        }, {
          'id': 98775825,
          'name': '自定义商店1',
          'type': 1
        }]
      }
    }
  })

  mock.post('/createDownloadUrl.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {
          id: 11
        }
      }
    }
  })

  mock.post('/editDownloadUrl.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/delDownloadUrl.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/createCustomStore.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {
          id: 22
        }
      }
    }
  })

  mock.post('/delCustomStore.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })

  mock.post('/delStore.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {}
      }
    }
  })
}
