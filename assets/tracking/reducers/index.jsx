import {combineReducers} from 'redux'
import appReducer from './app.jsx'
import gameReducer from './game.jsx'
import errorReducer from './error.jsx'
import storeReducer from './store.jsx'
import channelReducer from './channel.jsx'
import summaryReducer from './summary.jsx'
import mixedPanelReducer from './mixed_panel.js'
import Reduxis from 'dejs/lib/reduxis'
import * as CONSTS from '../helpers/constants.jsx'
import _ from 'lodash'

let mixedPanelReducers = Reduxis.batchCreateReducers([
  'coreLtv',
  'coreTrending',
  'coreRatioClick',
  'coreRatioActive',
  'coreRatioRevenue',
  'summaryClickInstall',
  'summaryAnalysis',
  'summaryEvent',
  'summaryRatioRealInstall',
  'summaryRatioActive',
  'summaryRatioRevenue',
  'summaryActiveRate',
  'summaryRatioInstall',
  'realtimeAnalysis',
  'realtimeTrending'
], mixedPanelReducer, CONSTS.MIXED_PANEL_INITIAL_STATE)

export default combineReducers(_.assign(mixedPanelReducers, {
  app: appReducer,
  game: gameReducer,
  error: errorReducer,
  store: storeReducer,
  channel: channelReducer,
  summary: summaryReducer
}))
