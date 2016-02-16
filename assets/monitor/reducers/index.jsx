import {combineReducers} from 'redux'
import DeviceReducer from './device.jsx'
import EmployeeReducer from './employee.jsx'
import SummaryReducer from './summary.jsx'
import BusinessReducer from './business.jsx'
import ServerMonitor from './servermonitor.jsx'
import mixedPanelReducer from './mixed_panel.js'
import AlarmReducer from './alarm.jsx'
import Reduxis from 'dejs/lib/reduxis'
import * as CONSTS from '../helpers/constants.jsx'
import _ from 'lodash'

let mixedPanelReducers = Reduxis.batchCreateReducers([
  'cpuTotalUsage',
  'cpuEveryMinUsage',
  'cpuEveryCoreUsage',
  'cpuTotalUsageContrast',
  'cpuOneMinUsageContrast',
  'cpuFiveMinUsageContrast',
  'cpuFifteenMinUsageContrast',
  'cpuEveryCoreUsageContrast',
  'intranetNICFlow',
  'intranetNICPackageVolume',
  'extranetNICFlow',
  'passiveTcpConn',
  'tcpConn',
  'extranetNICPackageVolume',
  'UDPDatagram',
  'comparedIntranetOutFlow',
  'comparedIntranetEntFlow',
  'comparedExtranetOutFlow',
  'comparedExtranetEntFlow',
  'comparedIntranetOutPackageVolume',
  'comparedIntranetEntPackageVolume',
  'comparedExtranetOutPackageVolume',
  'comparedExtranetEntPackageVolume',
  'comparedPassiveTcpConn',
  'comparedTcpConn',
  'comparedUDPReceiveDatagrams',
  'comparedUDPSendDatagrams',
  'comparedMemUsage',
  'comparedMemUsed',
  'comparedMemPri',
  'comparedMemVri',
  'comparedPrivateIPCS',
  'comparedMemSwapUsed',
  'memTotalUsage',
  'memUseState',
  'swapMemTotalUsage',
  'swapMemUseState',
  'comparedMemSwapUsage',
  'IOTotalUsage',
  'IOUseState',
  'diskIOReadWrite',
  'IOSwapUseState',
  'svctmIOUseTrend',
  'awaitIOUseTrend',
  'aveqIOUseTrend',
  'avgrqSzIOUseTrend',
  'utilIOUseTrend',
  'comparedIOPartitionUsage',
  'comparedIOPartitionAmount',
  'comparedDiskIORead',
  'comparedDiskIOWrite',
  'comparedSWAPSI',
  'comparedSWAPSO',
  'comparedSvctmTime',
  'comparedAwaitMax',
  'comparedAvgquSz',
  'comparedAvgrqSz',
  'comparedUtil'
], mixedPanelReducer, CONSTS.MIXED_PANEL_INITIAL_STATE)

export default combineReducers(_.assign(mixedPanelReducers, {
  device: DeviceReducer,
  employee: EmployeeReducer,
  summary: SummaryReducer,
  business:BusinessReducer,
  servermonitor:ServerMonitor,
  alarm:AlarmReducer
}))
