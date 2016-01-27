/**
 * https://github.com/shuvalov-anton/superagent-mocker
 */

import mock from 'dejs/lib/mock'
import * as test from './test.js'
import * as channel from './channel.js'
import * as store from './store.js'
import * as app from './app.js'
import * as core from './core.js'
import * as summary from './summary.js'
import * as realtime from './realtime.js'

export default function() {
  mock([
    test,
    channel,
    store,
    app,
    core,
    summary,
    realtime
  ], {
    appContextPath: App.CONTEXT_PATH,
    timeout: 1
  })
}
