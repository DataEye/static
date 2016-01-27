export function mockRetain(mock) {
  mock.post('/getApps.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': {
          'appAmount': 20,
          'gameAmount': 12,
          'totalRecord': 32,
          'pageSize': 10,
          'totalPage': 1,
          'pageID': 1,
          'content': [{
            'appid': 'C4CC8FA474C29487A72764B72A9C82CA8',
            'name': '汽车之家',
            'activatedAmount': 0,
            'activatedAmountToday': 0,
            'category': 1,
            'type': 3,
            'currency': 'CNY',
            'mark': 1,
            'authority': 1,
            'platform': 3,
            'gameEngine': 0
          }, {
            'appid': 'CDC170DB538EF91EC336C1E4A884E5CA4',
            'name': '我叫火影',
            'activatedAmount': 0,
            'activatedAmountToday': 0,
            'category': 2,
            'type': 8,
            'currency': 'CNY',
            'mark': 1,
            'authority': 1,
            'platform': 3,
            'gameEngine': 1
          }]
        }
      }
    }
  })

  mock.post('/delApp.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': {

        }
      }
    }
  })

  mock.post('/createApp.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': {
          'appid': 'CC415BB2542711724B5A41D910BF71D1C'
        }
      }
    }
  })

  mock.post('/editApp.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': {

        }
      }
    }
  })

  mock.post('/getAppStatus.do', function(req) {
    return {
      body: {
        'statusCode': 200,
        'content': {
          'activatedAmount': 123
        }
      }
    }
  })

  mock.get('/getAppsUnbind.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        content: [{
          'appid': 'C9BFFD34E444CED3D02045BA02B55A476',
          'name': '刀塔'
        }]
      }
    }
  })

  mock.post('/getCategoryAndType.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': [{
          'id': 1,
          'name': '应用',
          'children': [{
            'id': 3,
            'name': '音乐'
          }, {
            'id': 6,
            'name': '社交'
          }]
        }, {
          'id': 2,
          'name': '游戏',
          'children': [{
            'id': 4,
            'name': '回合制'
          }, {
            'id': 5,
            'name': 'RPG'
          }]
        }, {
          'id': 5,
          'children': [{
            'id': 7,
            'name': '卡牌'
          }]
        }]
      }
    }
  })

  mock.post('/getAppNames.do', function(req) {
    return {
      body: {
        'id': '1450437321148378',
        'statusCode': 200,
        'content': [{
          'appid': 'CDC170DB538EF91EC336C1E4A884E5CA4',
          'name': '我叫火影'
        }, {
          'appid': 'C4CC8FA474C29487A72764B72A9C82CA8',
          'name': '汽车之家'
        }]
      }
    }
  })
}
