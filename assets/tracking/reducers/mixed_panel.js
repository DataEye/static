import _ from 'lodash'
import * as CONSTS from '../helpers/constants.jsx'
import * as tools from '../helpers/tools.js'

const SUFFIX = {
  OK: '_ok',
  ERR: '_error'
}

function getPagedData({datasource, pagerID, pagerSize}) {
  const start = (pagerID - 1) * pagerSize
  const end = start + pagerSize
  return datasource.slice(start, end)
}

// 获取分页数据（服务端分页直接返回数据，客户端按页码以及大小切分）
function getPagedDataByType(opts, isServerPagination) {
  return isServerPagination ? opts.datasource : getPagedData(opts)
}

// 获取图例名称
function getChartNames(json) {
  return json.name || json.content.name
}

//Todo: set computed columns in config
function getTotalPercentage(ary) {
  let answer = 0
  const filtered = ary.filter((val) => !val.id || val.id !== '-')
  const click = tools.sumAttr(filtered, 'y0')
  const activated = tools.sumAttr(filtered, 'y1')
  if (click && activated) {
    answer = activated / click
  }
  return answer
}

function computeSummary(cols = [], list = [], avgFields = []) {
  if (cols.length < 1) {
    throw new Error('缺少列配置信息')
  }

  let summary = {}
  let keys = []
  let checkedNum = 0
  _.each(cols, (col) => {
    summary[col.dataIndex] = 0
    keys.push(col.dataIndex)
  })
  _.each(list, (row) => {
    if (row.checked !== false) {
      checkedNum += 1
      _.each(keys, (key) => {
        if (_.isNumber(row[key])) {
          summary[key] += row[key]
        }
      })
    }
  })
  if (summary.y2) {
    summary.y2 = getTotalPercentage(list)
  }
  if (avgFields.length && checkedNum) {
    _.each(avgFields, (field) => {
      summary[field] = summary[field] / checkedNum
    })
  }

  return summary
}

function getSummary(config, json, isServerPagination) {
  if (!isServerPagination) {
    if (config.formatters) {
      return computeSummary(config.columns, json, config.avgFields)
    }
  }

  return {}
}

function getAllowedActionTypeList(asyncAction) {
  let list = []
  asyncAction.forEach((action) => {
    list.push(action)
    list.push(action + SUFFIX.OK)
    list.push(action + SUFFIX.ERR)
  })

  return list
}

const ACTION_LIST = getAllowedActionTypeList(CONSTS.ASYNC_ACTION_TYPE_LIST).concat(CONSTS.SYNC_ACTION_TYPE_LIST)

// export default function(componentID) {
export default function(state = CONSTS.MIXED_PANEL_INITIAL_STATE, action) {
  // flux standard action
  let {payload, meta, type, error} = action

  if (!_.contains(ACTION_LIST, action.type)) {
    return state
  }

  // original为一些辅助信息或原始action数据
  if (!meta || !meta.original) {
    console.warn(`MixedPanel Action(${action.type}) 没有设置meta.original`)
    return state
  }

  // 开始切换菜单
  if (_.contains(CONSTS.ASYNC_ACTION_TYPE_LIST, type)) {
    return _.assign({}, state, {
      done: false
    })
  }

  // 统一错误处理
  if (_.endsWith(type, SUFFIX.ERR) && error) {
    return _.assign({}, state, {
      done: true,
      isEmpty: false,
      error: payload
    })
  }

  // 异步ok类的action，payload为服务端返回数据
  let {original} = meta || {}
  let datalist, switchTabBaseData

  if (type === 'change_client_page') {
    datalist = getPagedData({
      datasource: state.chartData,
      pagerID: payload.pagerID,
      pagerSize: state.pagerSize
    })
    return _.assign({}, state, {
      pagerID: payload.pagerID,
      datalist: datalist
    })
  }

  if (type === 'change_layout') {
    return _.assign({}, state, {
      currentLayout: payload.layout
    })
  }

  if (payload && Array.isArray(payload.content)) {
    datalist = payload && payload.content && getPagedDataByType({
      datasource: payload.content,
      pagerID: 1,
      pagerSize: state.pagerSize
    }, state.serverPagination)

    switchTabBaseData = {
      glance: payload.glance,
      chartData: payload.content,
      chartNames: getChartNames(payload),
      datalist: datalist,
      done: true,
      isEmpty: payload.content.length === 0,
      pagerID: 1,
      pagerTotal: payload.content.length,
      currentLevel: CONSTS.DEFAULT_LEVEL,
      breadCrumbList: CONSTS.DEFAULT_BREAD_CRUMB,
      breadCrumbRowList: [],
      summaryData: getSummary(original.tabConfig, payload.content, state.serverPagination),
      error: null
    }
  }

  // 菜单切换成功
  if (type === 'switch_tab_ok') {
    return _.assign({}, state, switchTabBaseData, {
      currentTabIndex: original.tabIndex,
      currentSubTabIndex: 0
    })
  }

  if (type === 'switch_sub_tab_ok') {
    return _.assign({}, state, switchTabBaseData, {
      currentSubTabIndex: original.subTabIndex,
    })
  }

  if (type === 'show_child_level_ok') {
    // NOTE 这里小心被坑，不要直接或无意中修改state的任何属性
    let breadCrumbList = _.cloneDeep(state.breadCrumbList)
    let breadCrumbRowList = _.cloneDeep(state.breadCrumbRowList)
    // splice更新或者直接插入
    breadCrumbList.splice(original.level, 1, original.breadCrumb)
    breadCrumbRowList.splice(original.level - 1, 1, original.rowData)
    return _.assign({}, state, {
      currentLevel: 'level' + original.level,
      datalist: datalist,
      chartData: payload.content,
      chartNames: getChartNames(payload),
      breadCrumbList: breadCrumbList,
      breadCrumbRowList: breadCrumbRowList,
      done: true,
      isEmpty: payload.content.length === 0,
      pagerID: 1,
      summaryData: getSummary(original.tabConfig, payload.content, state.serverPagination)
    })
  }

  if (type === 'show_parent_level_ok') {
    return _.assign({}, state, {
      currentLevel: 'level' + original.level,
      datalist: datalist,
      chartData: payload.content,
      chartNames: getChartNames(payload),
      breadCrumbList: state.breadCrumbList.slice(0, original.level + 1),
      breadCrumbRowList: state.breadCrumbRowList.slice(0, original.level),
      done: true,
      isEmpty: payload.content.length === 0,
      pagerID: 1,
      summaryData: getSummary(original.tabConfig, payload.content, state.serverPagination)
    })
  }

  if (type === 'request_server_page_ok') {
    return _.assign({}, state, {
      done: true,
      error: null,
      pagerID: meta.original.pagerID,
      pagerTotal: payload.content.totalRecord,
      datalist: payload.content.content,
      chartData: payload.content.content,
      chartNames: getChartNames(payload),
      isEmpty: payload.content.length === 0
    })
  }

  return state
  // }
}
