/**
 * 最终在pages里面调用action
 * this.props.actions.gameCreate(...)
 */

import _ from 'lodash'
import * as appActions from './app.jsx'
import * as gameActions from './game.jsx'
import * as userActions from './user.jsx'
import * as storeActions from './store.jsx'
import * as channelActions from './channel.jsx'
import * as summaryActions from './summary.jsx'
import * as mixedPanelActions from './mixed_panel.js'

const actions = {
  app: appActions,
  game: gameActions,
  user: userActions,
  store: storeActions,
  channel: channelActions,
  summary: summaryActions,
  mixedPanel: mixedPanelActions
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
