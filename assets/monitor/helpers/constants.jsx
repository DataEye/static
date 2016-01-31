export const MINUS_ONE = -1
export const SEARCH_TYPE_OPTIONS = [
  {value: 0, label: '所有'},
  {value: 1, label: '机房'},
  {value: 2, label: '业务'}
]

export const ALARM_TYPE = [
  {value: 0, label: '短信'},
  {value: 1, label: '邮件'}
]


export const KEYCODE_OF_ENTER = 13

export const DEFAULT_PAGESIZE = 50
export const PAGE_OPTIONS = ['10', '20', '50', '100', '200']

export const TOP_MENU = [
  {
    name: '监控平台',
    title: 'monitoring',
    subs: [
      {
        name: '服务器监控',
        title: 'server'
      }
    ]
  },
  {
    name: '配置平台',
    title: 'configuration'
  },
  {
    name: '告警平台',
    title: 'alarm',
    subs: [
      {
        name: '告警设置',
        title: 'alarmconfig'
      }
    ]
  }
]

export const MENU = {
  //配置平台
  configuration: {
    title: 'configuration',
    name: '配置平台',
    items: [
      {
        'name': '总览',
        'title': 'summary'
      },
      {
        'name': '主机管理',
        'title': 'devices'
      },
      {
        'name': '业务管理',
        'title': 'business'
      },
      {
        'name': '员工管理',
        'title': 'employee'
      }
    ]
  },
  alarmconfig:{
    title: 'alarmconfig',
    name: '告警设置',
    items: [
      {
        'name':'告警设置',
        'title': 'alarmconfig'
      }
    ]
  }
}

//export const TABS = ['CPU相关', '网络相关', '内存相关', 'IO相关', '基础信息', '硬件状态']
export const TABS = ['CPU相关', '网络相关', '内存相关', 'IO相关']

export const FEATRUE_IDS = [
  {
    name: 'CPU 利用率',
    featrueID: 10
  },
  {
    name: 'CPU 1分钟负载',
    featrueID: 11
  },
  {
    name: 'CPU 5分钟负载',
    featrueID: 12
  },
  {
    name: 'CPU 15分钟负载',
    featrueID: 13
  },
  {
    name: '内存使用率',
    featrueID: 21
  },
  {
    name: '内存使用量',
    featrueID: 21,
    object: 'mem_used'
  },
  {
    name: 'Private内存',
    featrueID: 22,
    object: 'mem_pri'
  },
  {
    name: 'Virtual内存',
    featrueID: 23,
    object: 'mem_vir'
  },
  {
    name: 'Private+IPCS',
    featrueID: 24,
    object: 'mpri_ipcs'
  },
  {
    name: 'SWAP内存使用量',
    featrueID: 25,
    object: 'mem_swap_used'
  },
  {
    name: '内网网卡出流量',
    featrueID: 50,
    object: 'em2'
  },
  {
    name: '内网网卡入流量',
    featrueID: 51,
    object: 'em2'
  },
  {
    name: '外网网卡出流量',
    featrueID: 50,
    object: 'em1'
  },
  {
    name: '外网网卡入流量',
    featrueID: 51,
    object: 'em1'
  },
  {
    name: '内网网卡出包量',
    featrueID: 52,
    object: 'em2'
  },
  {
    name: '内网网卡入包量',
    featrueID: 53,
    object: 'em2'
  },
  {
    name: '外网网卡出包量',
    featrueID: 52,
    object: 'em1'
  },
  {
    name: '外网网卡入包量',
    featrueID: 53,
    object: 'em1'
  },
  {
    name: '被动打开TCP连接数',
    featrueID: 54,
    object: 'tcp'
  },
  {
    name: 'TCP连接数',
    featrueID: 55,
    object: 'tcp'
  },
  {
    name: 'UDP接收数据报',
    featrueID: 56,
    object: 'passiveopens'
  },
  {
    name: 'UDP发送数据报',
    featrueID: 57,
    object: 'currestab'
  },
  {
    name: '磁盘IO读',
    featrueID: 31,
    object: 'pgpgin'
  },
  {
    name: '磁盘IO写',
    featrueID: 32,
    object: 'pgpgout'
  },
  {
    name: 'SWAP SI',
    featrueID: 33,
    object: 'pswpin'
  },
  {
    name: 'SWAP SO',
    featrueID: 34,
    object: 'pswpout'
  },
  {
    name: 'Svctm_time',
    featrueID: 35,
    object: 'svctm'
  },
  {
    name: 'Await_max',
    featrueID: 36,
    object: 'await'
  },
  {
    name: 'avgqu_sz',
    featrueID: 37,
    object: 'aveq'
  },
  {
    name: 'avgrq_sz',
    featrueID: 38,
    object: 'avgrq_sz'
  },
  {
    name: 'util',
    featrueID: 39,
    object: 'util'
  }
]

// MixedPanel consts
export const DEFAULT_LEVEL = 'level0'
export const DEFAULT_BREAD_CRUMB = ['全部']
export const DEFAULT_LAYOUT = 'table'
export const DEFAULT_LAYOUT_OPTIONS = ['table', 'chart', 'both']
// 异步action
export const ASYNC_ACTION_TYPE_LIST = [
  'switch_tab',
  'switch_sub_tab',
  'show_child_level',
  'show_parent_level',
  'request_server_page'
]
export const SYNC_ACTION_TYPE_LIST = [
  'change_client_page',
  'change_layout'
]
export const MIXED_PANEL_INITIAL_STATE = {
  currentLayout: DEFAULT_LAYOUT,
  summaryData: {},
  currentTabIndex: 0,
  currentSubTabIndex: 0,
  breadCrumbList: DEFAULT_BREAD_CRUMB,
  breadCrumbRowList: [],
  datalist: [],
  chartNames: {},
  chartData: [],
  pagerTotal: 0,
  pagerSize: 10,
  pagerID: 1,
  currentLevel: DEFAULT_LEVEL,
  // 进度条相关
  done: false,
  isEmpty: true,
  error: null
}
