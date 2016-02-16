import React, {PropTypes} from 'react'
import {FEATRUE_IDS} from '../../../../../helpers/constants.jsx'
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
    //内存使用率
    const comparedMemUsageTitle = (
      <div>
        <span>内存使用率</span>
      </div>)
    const comparedMemUsage = [
      {
        url: '/monitor/getComparedMemUsage.do',
        data: _.assign({}, this.props.data,
          {featrueID: FEATRUE_IDS.filter((item) => {return item.name === '内存使用率'})[0].featrueID}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: function() {
            return utils.asPercentage(this.value)
          },
          categoryFormatter: (value) => {
            let arr = value.split('#')
            return arr[0] + '<br/>' + arr[1]
          }
        }
      }
    ]
    //内存使用量
    const comparedMemUsedTitle = (
      <div>
        <span>内存使用量</span>
      </div>)
    const comparedMemUsedFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '内存使用量'})[0]
    const comparedMemUsed = [
      {
        url: '/monitor/getComparedMemUsage.do',
        data: _.assign({}, this.props.data,
          {featrueID: comparedMemUsedFeatrue.featrueID, object: comparedMemUsedFeatrue.object}),
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
    //Private内存
    const comparedMemPriTitle = (
      <div>
        <span>Private内存</span>
      </div>)
    const MemPriFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'Private内存'})[0]
    const comparedMemPri = [
      {
        url: '/monitor/getComparedMemUsageAmount.do',
        data: _.assign({}, this.props.data,
          {featrueID: MemPriFeatrue.featrueID, object: MemPriFeatrue.object}),
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
    //Virtual内存
    const comparedMemVriTitle = (
      <div>
        <span>Virtual内存</span>
      </div>)
    const MemVriFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'Virtual内存'})[0]
    const comparedMemVri = [
      {
        url: '/monitor/getComparedMemUsageAmount.do',
        data: _.assign({}, this.props.data,
          {featrueID: MemVriFeatrue.featrueID, object: MemVriFeatrue.object}),
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
    //Private+IPCS
    const comparedPrivateIPCSTitle = (
      <div>
        <span>Private+IPCS</span>
      </div>)
    const PrivateIPCSFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'Private+IPCS'})[0]
    const comparedPrivateIPCS = [
      {
        url: '/monitor/getComparedMemUsageAmount.do',
        data: _.assign({}, this.props.data,
          {featrueID: PrivateIPCSFeatrue.featrueID, object: PrivateIPCSFeatrue.object}),
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
    //SWAP内存使用量
    const comparedMemSwapUsedTitle = (
      <div>
        <span>SWAP内存使用量</span>
      </div>)
    const memSwapUsedFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'SWAP内存使用量'})[0]
    const comparedMemSwapUsed = [
      {
        url: '/monitor/getComparedMemUsageAmount.do',
        data: _.assign({}, this.props.data,
          {featrueID: memSwapUsedFeatrue.featrueID, object: memSwapUsedFeatrue.object}),
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
    //SWAP内存使用率
    const comparedMemSwapUsageTitle = (
      <div>
        <span>SWAP内存使用率</span>
      </div>)
    const comparedMemSwapUsage = [
      {
        url: '/monitor/getComparedMemSwapUsage.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: function() {
            return utils.asPercentage(this.value)
          },
          categoryFormatter: (value) => {
            let arr = value.split('#')
            return arr[0] + '<br/>' + arr[1]
          }
        }
      }
    ]
    chartConfigArr = [
      {
        id: 'comparedMemUsage',
        title: comparedMemUsageTitle,
        level0: comparedMemUsage
      },
      {
        id: 'comparedMemUsed',
        title: comparedMemUsedTitle,
        level0: comparedMemUsed
      },
      {
        id: 'comparedMemPri',
        title: comparedMemPriTitle,
        level0: comparedMemPri
      },
      {
        id: 'comparedMemVri',
        title: comparedMemVriTitle,
        level0: comparedMemVri
      },
      {
        id: 'comparedPrivateIPCS',
        title: comparedPrivateIPCSTitle,
        level0: comparedPrivateIPCS
      },
      {
        id: 'comparedMemSwapUsed',
        title: comparedMemSwapUsedTitle,
        level0: comparedMemSwapUsed
      },
      {
        id: 'comparedMemSwapUsage',
        title: comparedMemSwapUsageTitle,
        level0: comparedMemSwapUsage
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
