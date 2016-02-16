import React, {PropTypes} from 'react'
import {FEATRUE_IDS} from '../../../../../helpers/constants.jsx'
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
    //CPU 利用率
    const cpuTotalUsageContrastTitle = (
      <div>
        <span>CPU 利用率</span>
      </div>)
    let cpuTotalUsageContrast = [
      {
        url: '/monitor/getComparedCpuUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: FEATRUE_IDS.filter((item) => {return item.name === 'CPU 利用率'})[0].featrueID}),
        rowKey: (row) => {
          return row.x
        },
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: function() {
            return utils.asPercentage(this.value)
          },
          categoryFormatter: (value) => {
            let arr = value.split('#')
            return arr[0] + '<br/>' + arr[1]
          }
        },
        showSwitcher: false
      }
    ]
    //CPU 1分钟负载
    const cpuOneMinUsageContrastTitle = (
      <div>
        <span>CPU 1分钟负载</span>
      </div>)
    let cpuOneMinUsageContrast = [
      {
        url: '/monitor/getComparedCpuUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: FEATRUE_IDS.filter((item) => {return item.name === 'CPU 1分钟负载'})[0].featrueID}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          categoryFormatter: (value) => {
            let arr = value.split('#')
            return arr[0] + '<br/>' + arr[1]
          }
        }
      }
    ]
    //CPU 5分钟负载
    const cpuFiveMinUsageContrastTitle = (
      <div>
        <span>CPU 5分钟负载</span>
      </div>)
    let cpuFiveMinUsageContrast = [
      {
        url: '/monitor/getComparedCpuUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: FEATRUE_IDS.filter((item) => {return item.name === 'CPU 5分钟负载'})[0].featrueID}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          categoryFormatter: (value) => {
            let arr = value.split('#')
            return arr[0] + '<br/>' + arr[1]
          }
        }
      }
    ]
    //CPU 15分钟负载
    const cpuFifteenMinUsageContrastTitle = (
      <div>
        <span>CPU 15分钟负载</span>
      </div>)
    let cpuFifteenMinUsageContrast = [
      {
        url: '/monitor/getComparedCpuUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: FEATRUE_IDS.filter((item) => {return item.name === 'CPU 15分钟负载'})[0].featrueID}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          categoryFormatter: (value) => {
            let arr = value.split('#')
            return arr[0] + '<br/>' + arr[1]
          }
        }
      }
    ]
    chartConfigArr = [
      {
        id: 'cpuTotalUsageContrast',
        title: cpuTotalUsageContrastTitle,
        level0: cpuTotalUsageContrast
      },
      {
        id: 'cpuOneMinUsageContrast',
        title: cpuOneMinUsageContrastTitle,
        level0: cpuOneMinUsageContrast
      },
      {
        id: 'cpuFiveMinUsageContrast',
        title: cpuFiveMinUsageContrastTitle,
        level0: cpuFiveMinUsageContrast
      },
      {
        id: 'cpuFifteenMinUsageContrast',
        title: cpuFifteenMinUsageContrastTitle,
        level0: cpuFifteenMinUsageContrast
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
