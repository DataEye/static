/**
 * 最终在pages里面调用action
 * this.props.actions.gameCreate(...)
 */

import _ from 'lodash'
import * as DeviceActions from './device.jsx'
import * as EmployeeActions from './employee.jsx'
import * as SummaryActions from './summary.jsx'
import * as BusinessActions from './business.jsx'
import * as ServerMonitorActions from './servermonitor.jsx'
import * as mixedPanelActions from './mixed_panel.js'
import * as AlarmActions from './alarm.jsx'

const actions = {
  device: DeviceActions,
  employee:EmployeeActions,
  summary:SummaryActions,
  business:BusinessActions,
  servermonitor:ServerMonitorActions,
  mixedPanel:mixedPanelActions,
  alarm:AlarmActions
}

function convert(actionCreators) {
  let ret = {}
  _.each(actionCreators, (item, key) => {
    _.each(item, function(action, funcName) {
      let newActionName = _.camelCase(key + '_' + funcName)
      ret[newActionName] = action
    })
  })

  return ret
}

export default convert(actions)
