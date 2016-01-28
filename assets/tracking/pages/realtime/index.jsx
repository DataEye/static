/**
 * 实时统计
 */

import React, {PropTypes} from 'react'
import MixedPanelContainer from '../../components/mixed_panel/container.jsx'
import * as utils from 'dejs/lib/utils'
import Tips from '../../components/tips.jsx'
// import Download from '../../components/download.jsx'
import {tips} from '../../helpers/tips.js'
import ContainerHeader from '../../widgets/container_header.jsx'
import Clock from '../../widgets/clock.jsx'
import moment from 'moment'
import Timer from 'dejs/lib/timer'
import ChangingNumber from '../../components/changing_number.jsx'
import _ from 'lodash'

const analysisTips = _.filter(tips, 'module', '实时指标分析')
const trendingTips = _.filter(tips, 'module', '实时数据趋势')

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object
  },

  getInitialState() {
    return ({
      uid: window.App.uid,
      appid: this.props.params.appid,
      startdate: this.getToday(),
      enddate: this.getToday(),
      timer: new Timer(this.refreshData, 5000)
    })
  },

  refreshData() {
    this.refs.realtimeAnalysis.reload()
    this.refs.realtimeTrending.reload()
  },

  componentDidMount() {
    this.state.timer.run()
  },

  componentWillUnmount() {
    this.state.timer.cancel()
  },

  getToday() {
    return moment().format('YYYYMMDD')
  },

  showChildLevel(row, level) {
    let tabConfig = this.refs.realtimeAnalysis.getLevelConfig(`level${level}`)[0]
    this.refs.realtimeAnalysis.dispatchAction('mixedPanelShowChildLevel', {
      data: utils.tryExec(tabConfig.data, this, row),
      url: tabConfig.url,
      level,
      rowData: row,
      breadCrumb: row.x,
      tabConfig
    })
  },

  formatInt(val) {
    return <ChangingNumber num={val} formatter={utils.asInteger}/>
  },

  formatCurrency(val) {
    return <ChangingNumber num={val} formatter={utils.asCurrency}/>
  },

  formatPercentage(val) {
    return <ChangingNumber num={val} formatter={utils.asPercentage}/>
  },

  getLevel(i) {
    return this.props.states.realtimeAnalysis.breadCrumbRowList[i]
  },

  render() {
    const analysisSharedColumns = [
      {title: '点击', dataIndex: 'y0', width: '15%', key: '1',
        render: (val) => {
          return (<span>{utils.asInteger(val)}</span>)
        }
      },
      {title: '激活', dataIndex: 'y1', width: '15%', key: '2',
        render: (val) => {
          return (<span>{utils.asInteger(val)}</span>)
        }
      },
      {title: '转化率', dataIndex: 'y2', width: '15%', key: '3',
        render: (val) => {
          return (<span>{utils.asPercentage(val)}</span>)
        }
      },
      {title: '今日累计活跃', dataIndex: 'y3', width: '15%', key: '4',
        render: (val) => {
          return (<span>{utils.asInteger(val)}</span>)
        }
      },
      {title: '今日累计付费', dataIndex: 'y4', width: '15%', key: '5',
        render: (val) => {
          return (<span className="currency">{utils.asCurrency(val)}</span>)
        }
      }
    ]

    const analysisSharedConfig = {
      rowKey: (row) => row.x,
      showSwitcher: false,
      formatters: ['合计', this.formatInt, this.formatInt, this.formatPercentage, this.formatInt, this.formatCurrency]
    }

    const analysisLvl0 = [
      _.assign({
        url: '/overviewChannelRealTimeData.do',
        data: () => {
          return this.state
        },
        columns: [
          {title: '全部', dataIndex: 'x', key: '0', width: '10%', render: (val, row, index) => {
            return (
              <span>
                <a href="javascript:;" onClick={this.showChildLevel.bind(this, row, 1)}>{val}</a>
              </span>
            )
          }},
          ...analysisSharedColumns
        ]
      }, analysisSharedConfig)
    ]

    const ltvLvl1 = [
      _.assign({
        url: '/overviewCampaignRealTimeData.do',
        data: (row) => {
          return Object.assign({}, this.state, {
            channel: !row ? this.getLevel(0).id : row.id
          })
        },
        columns: [
          {title: '全部', dataIndex: 'x', key: '0', width: '10%', render: (val, row, index) => {
            return (
              <span>
                <a href="javascript:;" onClick={this.showChildLevel.bind(this, row, 2)}>{val}</a>
              </span>
            )
          }},
          ...analysisSharedColumns
        ]
      }, analysisSharedConfig)
    ]

    const ltvLvl2 = [
      _.assign({
        url: '/overviewPublisherRealTimeData.do',
        data: (row) => {
          return Object.assign({}, this.state, {
            campaign: !row ? this.getLevel(1).id : row.id
          })
        },
        columns: [
          {title: '全部', dataIndex: 'x', key: '0', width: '10%', render: (val, row, index) => {
            return (
              <span>
                <a href="javascript:;" onClick={this.showChildLevel.bind(this, row, 3)}>{val}</a>
              </span>
            )
          }},
          ...analysisSharedColumns
        ]
      }, analysisSharedConfig)
    ]

    const ltvLvl3 = [
      _.assign({
        url: '/overviewSiteRealTimeData.do',
        data: (row) => {
          return Object.assign({}, this.state, {
            publisher: row.x,
            campaign: !row ? this.getLevel(1).id : row.id
          })
        },
        columns: [
          {title: '全部', dataIndex: 'x', key: '0', width: '10%', render: (val, row, index) => {
            return (
              <span>{val}</span>
            )
          }},
          ...analysisSharedColumns
        ]
      }, analysisSharedConfig)
    ]

    const tabShared = {
      url: '/overviewTotalTopNChannelRealTimeData.do',
      columns: [
        {title: 'Total', dataIndex: 'y0', key: '0', width: '100%'},
      ],
      rowKey: (row) => row.x,
      formatters: [utils.asInteger],
      subTabName: '汇总',
      showSwitcher: false,
      children: [
        {
          url: '/overviewTopNChannelRealTimeData.do',
          tabName: '分渠道',
          data: () => {
            return this.state
          },
          columns: [
            {title: 'Total', dataIndex: 'y0', key: '0', width: '100%'},
          ],
          rowKey: (row) => row.x,
          showSwitcher: false,
          avgFields: ['y2'],
          formatters: [utils.asInteger]
        }
      ]
    }

    const trendingLvl0 = [
      Object.assign({
        tabName: '点击',
        data: () => {
          this.setState({eventId: 1})
          return Object.assign({}, this.state, {
            eventId: 1
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '激活',
        data: () => {
          this.setState({eventId: 2})
          return Object.assign({}, this.state, {
            eventId: 2
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '转化率',
        data: () => {
          this.setState({eventId: 3})
          return Object.assign({}, this.state, {
            eventId: 3
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '活跃',
        data: () => {
          this.setState({eventId: 9})
          return Object.assign({}, this.state, {
            eventId: 9
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '付费额',
        data: () => {
          this.setState({eventId: 4})
          return Object.assign({}, this.state, {
            eventId: 6
          })
        }
      }, tabShared)
    ]

    let analysisTitle = (
      <div>
        <span>实时指标分析</span>
        <div className="pull-right" >
          <Tips tips={analysisTips}/>
        </div>
      </div>)

    let trendingTitle = (
      <div>
        <span>实时数据趋势</span>
        <div className="pull-right" >
          <Tips tips={trendingTips}/>
        </div>
      </div>)

    let props = this.props
    return (
      <div>
        <ContainerHeader>
          <Clock UTCOffset="8"/>
        </ContainerHeader>
        <MixedPanelContainer
          id="realtimeAnalysis"
          ref="realtimeAnalysis"
          actions={props.actions}
          states={props.states}
          title={analysisTitle}
          layout="table"
          level0={analysisLvl0}
          level1={ltvLvl1}
          level2={ltvLvl2}
          level3={ltvLvl3}
        />
        <MixedPanelContainer
          id="realtimeTrending"
          ref="realtimeTrending"
          actions={props.actions}
          states={props.states}
          title={trendingTitle}
          layout="chart"
          level0={trendingLvl0}
        />
      </div>
    )
  }
})
