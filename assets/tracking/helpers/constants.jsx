export const DOMAIN = 't.dataeye.com'
export const APP_TYPE_OPTIONS = [
  {value: 1, label: '所有应用'},
  {value: 2, label: 'APP'},
  {value: 3, label: '游戏'},
  {value: 4, label: '创建'},
]
export const KEYCODE_OF_ENTER = 13
export const PLATFORM_TYPE = {android: 0x01, iOS: 0x02}
export const GAME_ENGINE = {'Cocos2d-x': 1, 'U3d': 2, 'Flash air': 3, '自研引擎': 4, '其他': 5}
export const CURRENCY_OPTIONS = [
  {value: 'CNY', label: 'CNY-中国人民币'}
]

//Status codes
export const OK = 200
export const NO_REQUEST_RESOURCE = 407
export const DUPLICATE = 302
export const DEL_CUSTOM_FAILED = 302
export const DEL_DOWNLOAD_URL_FAILED = 408
export const DEL_CUSTOM_CHANNEL_FAILED = 302
export const GENERATING_LINK_FAILED = 507
export const DEL_CAMPAIGN_FAILED = 400
export const IN_USE = 406
export const SERVER_INTERNAL_ERROR = 500
export const DEL_STORE_FAILED = 400
export const APP_NAME_IN_USE = 406
export const CUSTOM_STORE_NAME_IN_USE = 406

//React-bootstrap col size number
export const NUMBER_1 = 1
export const NUMBER_2 = 2
export const NUMBER_3 = 3
export const NUMBER_4 = 4
export const NUMBER_5 = 5
export const NUMBER_6 = 6
export const NUMBER_7 = 7
export const NUMBER_8 = 8
export const NUMBER_9 = 9
export const NUMBER_10 = 10
export const NUMBER_11 = 11
export const NUMBER_12 = 12

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
  'change_layout',
  'reset'
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
