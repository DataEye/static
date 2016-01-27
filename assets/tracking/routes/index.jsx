/**
 * 全局路由配置
 * 与redux相关的不要写在此文件中
 */

import React from 'react'
import {Route, Router} from 'react-router'
import Root from '../pages/root.jsx'
import Channel from '../pages/channel/index.jsx'
import ChannelAdd from '../pages/channel/add.jsx'
import Store from '../pages/store/index.jsx'
import StoreAdd from '../pages/store/add.jsx'
import CreateApp from '../pages/app/create_app/index.jsx'
import Core from '../pages/core/index.jsx'
import Summary from '../pages/summary/index.jsx'
import Realtime from '../pages/realtime/index.jsx'

export default (
  <Router>
    <Route path="/" component={Root}>
      <Route path="channels/:appid" component={Channel} />
      <Route path="channels/add/:appid" component={ChannelAdd} />
      <Route path="stores/:appid" component={Store} />
      <Route path="stores/add/:appid" component={StoreAdd} />
      <Route path="createApp" component={CreateApp} />
      <Route path="summary/:appid" component={Summary} />
      <Route path="core/:appid" component={Core} />
      <Route path="realtime/:appid" component={Realtime} />
    </Route>
  </Router>
)
