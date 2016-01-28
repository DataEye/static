/*eslint-disable */

/**
 * https://github.com/shuvalov-anton/superagent-mocker
 */

import request from 'superagent/lib/client'
import mocker from 'superagent-mocker'

// mocker.timeout = 100
const mock = App.useMock ? mocker(request) : {
  post: function() {},
  get: function() {}
}

mock.post('/getSummaryTopData.do', function(req) {
  return {
    body: {
      "statusCode": 200,
      "content": {
        "content": [{
          "id":1,
          "name": "总设备",
          "value": 100
        },{
          "id":2,
          "name": "可用",
          "value": 100
        },{
            "id":3,
            "name": "空闲",
            "value": 100
          }]
      }
    }
  }
})

mock.post('/getSummaryTableData.do', function(req) {
  return {
    body: {
      "statusCode": 200,
      "content": {
        "content": [{
          "id":1,
          "name": "业务A",
          "value": 10,
          "percentage": "10%"
        },{
          "id":2,
          "name": "业务B",
          "value": 50,
          "percentage": "50%"
        },{
          "id":3,
          "name": "业务C",
          "value": 40,
          "percentage": "40%"
        }]
      }
    }
  }
})

mock.post('/getEmployeeList.do', function(req) {
  return {
    body: {
      "statusCode": 200,
      "content": {
        "pageId":1,
        "pageSize":10,
        "totalRecord":3,
        "content": [{
          "id":1,
          "name":"zs",
          "email":"email",
          "phone":"11111111",
          "teamName":"研发组1",
          "deptName":"研发部"
        }, {
          "id":2,
          "name":"lily",
          "email":"email",
          "phone":"11111111",
          "teamName":"研发组1",
          "deptName":"研发部"
        }, {
          "id":3,
          "name":"ls",
          "email":"email",
          "phone":"11111111",
          "teamName":"研发组1",
          "deptName":"研发部"
        },
        ]
      }
    }
  }
})

mock.post('/getDeviceList.do',function(req){
    return {
      body: {
        "statusCode": 200,
        "content": {
          "totalRecord":3,
          "content": [{
            "devId":1,
            "privateIp":"1.1.1.1",
            "publicIp":"1.2.1.1",
            "hostName":"data0",
            "idcName":"一号机房",
            "busiName":"广告追踪",
            "moduleName":"logger"

          },{
              "devId":2,
              "privateIp":"1.1.1.1",
              "publicIp":"1.2.1.1",
              "idcName":"一号机房",
              "busiName":"广告追踪",
              "moduleName":"web",
              "devTpe":2,
              "cabinat":1,
              "cpuNum":10,
              "cpuPhyCores":20,
              "ostype":1,
              " memory":250,
              "dept":1,
              "module":1,
              "bakadmin":1,
              "hostName":"fdfds",
              "idc":1,
              "netCardNum":10,
              "cpuType":1,
              "cpuLogicCores":400,
              "kernal":1,
              "diskNum":2,
              "diskSize":300,
              "diskDetail":"fdfds",
              "business":1,
              "admin":1,
              "desc":"fdfds",
              "deviceIPList":"fdfds"
            },
            {
              "devId":3,
              "privateIp":"1.1.1.1",
              "publicIp":"1.2.1.1",
              "idcName":"一号机房",
              "busiName":"广告追踪",
              "moduleName":"web",
              "devTpe":1,
              "cabinat":1,
              "cpuNum":10,
              "cpuPhyCores":20,
              "ostype":1,
              " memory":250,
              "dept":1,
              "module":1,
              "bakadmin":1,
              "hostName":"fdfds",
              "idc":1,
              "netCardNum":10,
              "cpuType":1,
              "cpuLogicCores":400,
              "kernal":1,
              "diskNum":2,
              "diskSize":300,
              "diskDetail":"fdfds",
              "business":1,
              "admin":1,
              "desc":"fdfds",
              "deviceIPList":"fdfds"
            }
          ]
        }
      }
    }
})



mock.post('/getDeviceInitData.do',function(req){
  return {
    body: {
      "statusCode": 200,
      "content": {
        "content": {
          "deviceType":[
            {
              label:"Dell1",
              value:1
            },
            {
              label:"Dell2",
              value:2
            }
          ],
          "cpuType":[  {
            label:"Dell1",
            value:1
          }],
          "osType":[  {
            label:"Dell1",
            value:1
          }],
          "kernel":[  {
            label:"Dell1",
            value:1
          }],
          "isp":[  {
            label:"Dell1",
            value:1
          }],
          "idc":[  {
            label:"Dell1",
            value:1
          }],
          "cabinat":[{
            label:"Dell1",
            value:1
          }],
          business:[{
            label:"Dell1",
            value:1
          }],
          module:[{
            label:"Dell1",
            value:1
          }],
          dept:[{
            label:"Dell1",
            value:1
          }]
        }

      }
    }
  }
})

mock.post('/getBusinessList.do',function(req){
  return {
    body: {
      "statusCode": 200,
      "content": {
        "content": [ {
          "id":1,
          "name":"广告",
          "moduleNum":5,
          "omPerson":"ah",
          "module":[{
            "id":4,
            "name":"游戏",
            "moduleNum":5,
            "omPerson":"aw"
          },{
            "id":5,
            "name":"音乐",
            "moduleNum":5,
            "omPerson":"as"
          }]
        }
        ]
      }
    }
  }
})
mock.post('/getOmpMenu.do',function(req){
  return {
    body: {
      "statusCode": 200,
      "content": {
        title: 'server',
        name: '服务器监控',
        items: [
          {
            title: 'roomView',
            name: '机房视图',
            'subs': [
              {
                'name': '全部',
                'title': 'roomView',
                'id': -1
              },
              {
                'name': '盐田',
                'title': 'roomView',
                'id': 1
              },
              {
                'name': '沙河西',
                'title': 'roomView',
                'id': 2
              }
            ]
          },
          {
            title: 'businessView',
            name: '业务视图',
            'subs': [
              {
                'name': '业务一',
                'title': 'businessView',
                'id': 1
              },
              {
                'name': '业务二',
                'title': 'businessView',
                'id': 2
              }
            ]
          },
          {
            title: 'groupingView',
            name: '分组视图',
            'subs': [
              {
                'name': '分组一',
                'title': 'groupingView',
                id: 1
              },
              {
                'name': '分组二',
                'title': 'groupingView',
                id: 2
              },
              {
                'name': '分组管理',
                'title': 'groupingManage'
              }
            ]
          }
        ]
      }
    }
  }
})
mock.post('/monitor/queryRoomServerList.do',function(req){
  return {
    body: {
      'ID':'1452737676347719',
      'statusCode':200,
      'content':{
        'totalRecord':1,
        'pageSize':50,
        'totalPage':1,
        'pageID':1,
        'order':0,
        'content':[{
          'serverID':27,
          'hostName':'dctest',
          'ip':[{'key':'192.168.1.1','value':0},{'key':'125.25.25.14','value':1}],
          'business':'tracking',
          'machineRoom':'盐田机房',
          'cpuUsage':'20%',
          'fiveLoad':'10%',
          'status':1
        }]
      }
    }
  }
})
mock.post('/monitor/getCpuTotalUsage.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
          [{"y0":0,"x":"2016-01-18 00:00"},
            {"y0":0,"x":"2016-01-18 01:00"},
            {"y0":0,"x":"2016-01-18 02:00"},
            {"y0":0,"x":"2016-01-18 03:00"},
            {"y0":0,"x":"2016-01-18 04:00"}],
      "name":{"y0":"CPU使用率"}}
  }
})
mock.post('/monitor/getCpuEveryMinUsage.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"y1":0,"y2":0,"x":"2016-01-18 00:00"},
          {"y0":0,"y1":0,"y2":0,"x":"2016-01-18 01:00"},
          {"y0":0,"y1":0,"y2":0,"x":"2016-01-18 02:00"}],
      "name":{"y0":"1分钟负载","y1":"5分钟负载","y2":"15分钟负载"}}
  }
})
mock.post('/monitor/getCpuEveryCoreUsage.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"y1":0,"y2":0,"x":"2016-01-18 00:00"},
          {"y0":0,"y1":0,"y2":0,"x":"2016-01-18 01:00"},
          {"y0":0,"y1":0,"y2":0,"x":"2016-01-18 02:00"}],
      "name":{"y0":"cpu0","y1":"cpu1","y2":"cpu2"}}
  }
})
mock.post('/monitor/getComparedCpuUsage.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"y1":0,"x":"01-19 21:00#01-23 21:00"},
          {"y0":0,"y1":0,"x":"01-19 22:00#01-23 22:00"},
          {"y0":0,"y1":0,"x":"01-19 23:00#01-23 23:00"}],
      "name":
      {"y0":"2016-01-18~2016-01-19 CPU使用率","y1":"2016-01-22~2016-01-23 CPU使用率"
      }}
  }
})
mock.post('/monitor/getIntranetNICFlow.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"TCP连接数"}}

  }
})
mock.post('/monitor/getIntranetNICPackageVolume.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"TCP连接数"}}
  }
})
//外网网卡出入流量
mock.post('/monitor/getExtranetNICFlow.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"TCP连接数"}}
  }
})
//外网网卡出入包量
mock.post('/monitor/getIntranetNICPackageVolume.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"TCP连接数"}}
  }
})
//TCP连接数
mock.post('/monitor/getTcpConn.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"TCP连接数"}}
  }
})

//被动打开的TCP连接数
mock.post('/monitor/getPassiveTcpConn.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"被动打开TCP连接数"}}
  }
})
//UDP收发数据报
mock.post('/monitor/getUDPDatagram.do',function(req){
  return {
    body: {
      "ID":"1453185549254738",
      "statusCode":200,
      "content":
        [
          {"y0":0,"x":"2016-01-19 20:00"},
          {"y0":0,"x":"2016-01-19 21:00"},
          {"y0":0,"x":"2016-01-19 22:00"},
          {"y0":0,"x":"2016-01-19 23:00"}],
      "name":{"y0":"被动打开TCP连接数"}}
  }
})

