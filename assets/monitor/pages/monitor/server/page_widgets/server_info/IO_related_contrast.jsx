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
    //磁盘分区使用率
    const comparedIOPartitionUsageTitle = (
      <div>
        <span>磁盘分区使用率</span>
      </div>)
    const comparedIOPartitionUsage = [
      {
        url: '/monitor/getComparedIOPartitionUsage.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false,
        chart: {
          tooltipValueFormatter: utils.asPercentage,
          yAxisLabelsFormatter: utils.asPercentage
        }
      }
    ]
    //磁盘分区使用量
    const comparedIOPartitionAmountTitle = (
      <div>
        <span>磁盘分区使用量</span>
      </div>)
    const comparedIOPartitionAmount = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //磁盘IO读
    const comparedDiskIOReadTitle = (
      <div>
        <span>磁盘IO读</span>
      </div>)
    const comparedDiskIOReadFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '磁盘IO读'})[0]
    const comparedDiskIORead = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedDiskIOReadFeatrue.featrueID, object: comparedDiskIOReadFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //磁盘IO写
    const comparedDiskIOWriteTitle = (
      <div>
        <span>磁盘IO写</span>
      </div>)
    const comparedDiskIOWriteFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '磁盘IO写'})[0]
    const comparedDiskIOWrite = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedDiskIOWriteFeatrue.featrueID, object: comparedDiskIOWriteFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // SWAP SI
    const comparedSWAPSITitle = (
      <div>
        <span>SWAP SI</span>
      </div>)
    const comparedSWAPSIFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'SWAP SI'})[0]
    const comparedSWAPSI = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedSWAPSIFeatrue.featrueID, object: comparedSWAPSIFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // SWAP SO
    const comparedSWAPSOTitle = (
      <div>
        <span>SWAP SO</span>
      </div>)
    const comparedSWAPSOFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'SWAP SO'})[0]
    const comparedSWAPSO = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedSWAPSOFeatrue.featrueID, object: comparedSWAPSOFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // Svctm_time
    const comparedSvctmTimeTitle = (
      <div>
        <span>Svctm_time</span>
      </div>)
    const comparedSvctmTimeFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'Svctm_time'})[0]
    const comparedSvctmTime = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedSvctmTimeFeatrue.featrueID, object: comparedSvctmTimeFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // Await_max
    const comparedAwaitMaxTitle = (
      <div>
        <span>Await_max</span>
      </div>)
    const comparedAwaitMaxFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'Await_max'})[0]
    const comparedAwaitMax = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedAwaitMaxFeatrue.featrueID, object: comparedAwaitMaxFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // avgqu_sz
    const comparedAvgquSzTitle = (
      <div>
        <span>avgqu_sz</span>
      </div>)
    const comparedAvgquSzFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'avgqu_sz'})[0]
    const comparedAvgquSz = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedAvgquSzFeatrue.featrueID, object: comparedAvgquSzFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // avgrq_sz
    const comparedAvgrqSzTitle = (
      <div>
        <span>avgrq_sz</span>
      </div>)
    const comparedAvgrqSzFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'avgrq_sz'})[0]
    const comparedAvgrqSz = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedAvgrqSzFeatrue.featrueID, object: comparedAvgrqSzFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // util
    const comparedUtilTitle = (
      <div>
        <span>avgrq_sz</span>
      </div>)
    const comparedUtilFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'util'})[0]
    const comparedUtil = [
      {
        url: '/monitor/getComparedIOPartitionAmount.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedUtilFeatrue.featrueID, object: comparedUtilFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    chartConfigArr = [
      {
        id: 'comparedIOPartitionUsage',
        title: comparedIOPartitionUsageTitle,
        level0: comparedIOPartitionUsage
      },
      {
        id: 'comparedIOPartitionAmount',
        title: comparedIOPartitionAmountTitle,
        level0: comparedIOPartitionAmount
      },
      {
        id: 'comparedDiskIORead',
        title: comparedDiskIOReadTitle,
        level0: comparedDiskIORead
      },
      {
        id: 'comparedDiskIOWrite',
        title: comparedDiskIOWriteTitle,
        level0: comparedDiskIOWrite
      },
      {
        id: 'comparedSWAPSI',
        title: comparedSWAPSITitle,
        level0: comparedSWAPSI
      },
      {
        id: 'comparedSWAPSO',
        title: comparedSWAPSOTitle,
        level0: comparedSWAPSO
      },
      {
        id: 'comparedSvctmTime',
        title: comparedSvctmTimeTitle,
        level0: comparedSvctmTime
      },
      {
        id: 'comparedAwaitMax',
        title: comparedAwaitMaxTitle,
        level0: comparedAwaitMax
      },
      {
        id: 'comparedAvgquSz',
        title: comparedAvgquSzTitle,
        level0: comparedAvgquSz
      },
      {
        id: 'comparedAvgrqSz',
        title: comparedAvgrqSzTitle,
        level0: comparedAvgrqSz
      },
      {
        id: 'comparedUtil',
        title: comparedUtilTitle,
        level0: comparedUtil
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
