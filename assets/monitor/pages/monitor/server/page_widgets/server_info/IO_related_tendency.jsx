import React, {PropTypes} from 'react'
import MixedPanelContainer from '../../../../../components/mixed_panel/container.jsx'
import * as utils from 'dejs/lib/utils'
import _ from 'lodash'

export default React.createClass({
  propTypes: {
    actions: PropTypes.object,
    states: PropTypes.object,
    data: PropTypes.object
  },
  render() {
    let chartConfigArr
    //磁盘分区使用率
    const IOTotalUsageTitle = (
      <div>
        <span>磁盘分区使用率</span>
      </div>)
    const IOTotalUsage = [
      {
        url: '/monitor/getIOTotalUsage.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: function() {
            return utils.asPercentage(this.value)
          }
        }
      }
    ]
    //IO使用量
    const IOUseStateTitle = (
      <div>
        <span>IO使用量</span>
      </div>)
    const IOUseState = [
      {
        url: '/monitor/getIOUseState.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //磁盘IO读写
    const diskIOReadWriteTitle = (
      <div>
        <span>磁盘IO读写</span>
      </div>)
    const diskIOReadWrite = [
      {
        url: '/monitor/getDiskIOReadWrite.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //SWAP使用情况
    const IOSwapUseStateTitle = (
      <div>
        <span>SWAP使用情况</span>
      </div>)
    const IOSwapUseState = [
      {
        url: '/monitor/getIOSwapUseState.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //Svctm_time_max
    const svctmIOUseTrendTitle = (
      <div>
        <span>Svctm_time_max</span>
      </div>)
    const svctmIOUseTrend = [
      {
        url: '/monitor/getIOUseTrend.do',
        data: _.assign({}, this.props.data, {featrueID: 35, object: 'svctm'}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //Await_time_max
    const awaitIOUseTrendTitle = (
      <div>
        <span>Await_time_max</span>
      </div>)
    const awaitIOUseTrend = [
      {
        url: '/monitor/getIOUseTrend.do',
        data: _.assign({}, this.props.data, {featrueID: 36, object: 'await'}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //avgqu_sz_max
    const aveqIOUseTrendTitle = (
      <div>
        <span>avgqu_sz_max</span>
      </div>)
    const aveqIOUseTrend = [
      {
        url: '/monitor/getIOUseTrend.do',
        data: _.assign({}, this.props.data, {featrueID: 37, object: 'aveq'}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //avgrq_sz
    const avgrqSzIOUseTrendTitle = (
      <div>
        <span>avgrq_sz</span>
      </div>)
    const avgrqSzIOUseTrend = [
      {
        url: '/monitor/getIOUseTrend.do',
        data: _.assign({}, this.props.data, {featrueID: 38, object: 'avgrq_sz'}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //util_max
    const utilIOUseTrendTitle = (
      <div>
        <span>util_max</span>
      </div>)
    const utilIOUseTrend = [
      {
        url: '/monitor/getIOUseTrend.do',
        data: _.assign({}, this.props.data, {featrueID: 39, object: 'util'}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    chartConfigArr = [
      {
        id: 'IOTotalUsage',
        title: IOTotalUsageTitle,
        level0: IOTotalUsage
      },
      {
        id: 'IOUseState',
        title: IOUseStateTitle,
        level0: IOUseState
      },
      {
        id: 'diskIOReadWrite',
        title: diskIOReadWriteTitle,
        level0: diskIOReadWrite
      },
      {
        id: 'IOSwapUseState',
        title: IOSwapUseStateTitle,
        level0: IOSwapUseState
      },
      {
        id: 'svctmIOUseTrend',
        title: svctmIOUseTrendTitle,
        level0: svctmIOUseTrend
      },
      {
        id: 'awaitIOUseTrend',
        title: awaitIOUseTrendTitle,
        level0: awaitIOUseTrend
      },
      {
        id: 'aveqIOUseTrend',
        title: aveqIOUseTrendTitle,
        level0: aveqIOUseTrend
      },
      {
        id: 'avgrqSzIOUseTrend',
        title: avgrqSzIOUseTrendTitle,
        level0: avgrqSzIOUseTrend
      },
      {
        id: 'utilIOUseTrend',
        title: utilIOUseTrendTitle,
        level0: utilIOUseTrend
      }
    ]
    return (
      <div>
        {
          chartConfigArr ? chartConfigArr.map((item) => {
            return (
              <MixedPanelContainer
                key={item.id}
                id={item.id}
                actions={this.props.actions}
                states={this.props.states}
                title={item.title}
                layout="chart"
                level0={item.level0}
                />
            )
          }) : ''
        }
      </div>
    )
  }
})
