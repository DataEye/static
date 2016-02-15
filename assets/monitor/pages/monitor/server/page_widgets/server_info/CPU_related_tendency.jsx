import React, {PropTypes} from 'react'
import MixedPanelContainer from '../../../../../components/mixed_panel/container.jsx'
import * as utils from 'dejs/lib/utils'

export default React.createClass({
  propTypes: {
    actions: PropTypes.object,
    states: PropTypes.object,
    data: PropTypes.object
  },
  render() {
    let chartConfigArr
    //CPU 总利用率
    const cpuTotalUsageTitle = (
      <div>
        <span>CPU 总利用率</span>
      </div>)
    //debugger
    const cpuTotalUsage = [
      {
        url: '/monitor/getCpuTotalUsage.do',
        data: this.props.data,
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: utils.asPercentage
        },
        rowKey: (row) => row.x,
        showSwitcher: false
      }
    ]
    //CPU 1/5/15分钟负载
    const cpuEveryMinUsageTitle = (
      <div>
        <span>CPU 1/5/15分钟负载</span>
      </div>)
    const cpuEveryMinUsage = [
      {
        url: '/monitor/getCpuEveryMinUsage.do',
        data: this.props.data,
        rowKey: (row) => row.x,
        showSwitcher: false
      }
    ]
    //各cpu核心利用率
    const cpuEveryCoreUsageTitle = (
      <div>
        <span>各CPU核心利用率</span>
      </div>)
    const cpuEveryCoreUsage = [
      {
        url: '/monitor/getCpuEveryCoreUsage.do',
        data: this.props.data,
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: utils.asPercentage
        },
        rowKey: (row) => row.x,
        showSwitcher: false
      }
    ]

    chartConfigArr = [
      {
        id: 'cpuTotalUsage',
        title: cpuTotalUsageTitle,
        level0: cpuTotalUsage
      },
      {
        id: 'cpuEveryMinUsage',
        title: cpuEveryMinUsageTitle,
        level0: cpuEveryMinUsage
      },
      {
        id: 'cpuEveryCoreUsage',
        title: cpuEveryCoreUsageTitle,
        level0: cpuEveryCoreUsage
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
