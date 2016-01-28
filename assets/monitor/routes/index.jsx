/**
 * 全局路由配置
 * 与redux相关的不要写在此文件中
 */

import React from 'react'
import {Route, Router} from 'react-router'
import Root from '../pages/root.jsx'
import Device from '../pages/cmdb/device/index.jsx'
import AddUpdateDevice from '../pages/cmdb/device/addUpdateDevice.jsx'
import Employee from '../pages/cmdb/employee/index.jsx'
import Summary from '../pages/cmdb/summary/index.jsx'
import Business from '../pages/cmdb/business/index.jsx'
//import RoomView from '../pages/monitor/server/roomView.jsx'
import IdcView from '../pages/monitor/server/idcView.jsx'
import BusinessView from '../pages/monitor/server/business_view.jsx'
import GroupView from '../pages/monitor/server/group_view.jsx'
import GroupMgmt from '../pages/monitor/server/groupMgmt.jsx'
import AlarmSet from '../pages/alarm/alarmset.jsx'
import Test from '../pages/cmdb/test/index.jsx'

export default (
  <Router>
    <Route path="/" component={Root}>
      <Route path="configuration/summary" component={Summary}/>
      <Route path="configuration/devices" component={Device}/>
      <Route path="configuration/devices/add_update/:id" component={AddUpdateDevice}/>
      <Route path="configuration/business" component={Business}/>
      <Route path="configuration/employee" component={Employee}/>
      <Route path="configuration/test" component={Test}/>
      <Route path="server/roomView/:id" component={IdcView}/>
      <Route path="server/businessView/:id" component={BusinessView}/>
      <Route path="server/groupingView/:id" component={GroupView}/>
      <Route path="server/groupingManage" component={GroupMgmt}/>
      <Route path="alarm/alarmconfig" component={AlarmSet}/>
    </Route>
  </Router>
)
