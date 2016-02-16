/**
 * 核心指标转化
 */

import React, {PropTypes} from 'react'
import MixedPanelContainer from '../../components/mixed_panel/container.jsx'
import * as utils from 'dejs/lib/utils'
import Tips from '../../components/tips.jsx'
// import Download from '../../components/download.jsx'
import DateFilter from '../../components/date_filter.jsx'
import {tips} from '../../helpers/tips.js'
import ContainerHeader from '../../widgets/container_header.jsx'
import CheckBox from '../../widgets/check_box.jsx'
import _ from 'lodash'
import moment from 'moment'
import zhCn from 'gregorian-calendar/lib/locale/zh_CN'
import GregorianCalendar from 'gregorian-calendar'

const ltvTips = _.filter(tips, 'module', '新增激活-LTV指标转化')
const trendingTips = _.filter(tips, 'module', '转化趋势')
const ratioTips = _.filter(tips, 'module', '转化占比')

//date filter default date range
const now = new GregorianCalendar(zhCn)
now.setTime(Date.now())
const start = now.clone()
const end = now.clone()
start.addDayOfMonth(Number('-14'))
end.addDayOfMonth(Number('-1'))

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
      startdate: moment().add(-14, 'days').format('YYYYMMDD'),
      enddate: moment().add(-1, 'days').format('YYYYMMDD'),
      // startdate: moment().add(-118, 'days').format('YYYYMMDD'),
      // enddate: moment().add(-88, 'days').format('YYYYMMDD'),
      interval: 7,
      topn: 10,
      activeType: 1
    })
  },

  showChildLevel(row, level) {
    let tabConfig = this.refs.coreLtv.getLevelConfig(`level${level}`)[0]
    this.refs.coreLtv.dispatchAction('mixedPanelShowChildLevel', {
      data: utils.tryExec(tabConfig.data, this, row),
      url: tabConfig.url,
      level,
      rowData: row,
      breadCrumb: row.x,
      tabConfig
    })
  },

  setDateFilter(startDate, endDate, interval) {
    this.setState({
      startdate: startDate,
      enddate: endDate,
      interval: interval
    }, function() {
      this.refs.coreLtv.reload()
      this.refs.coreTrending.reload()
      this.refs.coreRatioClick.reload()
      this.refs.coreRatioActive.reload()
      this.refs.coreRatioRevenue.reload()
    })
  },

  setActiveTypeRatioClick(activeType) {
    this.setState({activeTypeRatioClick: activeType}, function() {
      this.refs.coreRatioClick.reload()
    })
  },

  setActiveTypeRatioActive(activeType) {
    this.setState({activeTypeRatioActive: activeType}, function() {
      this.refs.coreRatioActive.reload()
    })
  },

  setActiveTypeRatioRevenue(activeType) {
    this.setState({activeTypeRatioRevenue: activeType}, function() {
      this.refs.coreRatioRevenue.reload()
    })
  },

  formatCurrency(currency) {
    return (<span className="currency">{utils.asCurrency(currency)}</span>)
  },

  getLevel(i) {
    return this.props.states.coreLtv.breadCrumbRowList[i - 1]
  },

  render() {
    const ltvSharedColumns = [
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
      {title: '付费', dataIndex: 'y3', width: '15%', key: '4',
        render: (val) => {
          return (<span className="currency">{utils.asNumber(val)}</span>)
        }
      },
      {title: '人均LTV', dataIndex: 'y4', width: '15%', key: '5',
        render: (val) => {
          return (<span className="currency">{utils.asNumber(val)}</span>)
        }
      }
    ]

    const ltvSharedConfig = {
      rowKey: (row) => row.x,
      showSwitcher: false,
      avgFields: ['y4'],
      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage, this.formatCurrency, this.formatCurrency]
    }

    const ltvLvl0 = [
      _.assign({
        url: '/overviewChannelLtv.do',
        data: () => {
          return this.state
        },
        columns: [
          {title: '全部', dataIndex: 'x', key: '0', width: '10%', render: (val, row, index) => {
            let answer
            if (row.id && row.id === '-') {
              answer = (<span>{val}</span>)
            } else {
              answer = (
                <span>
                  <a href="javascript:;" onClick={this.showChildLevel.bind(this, row, 1)}>{val}</a>
                </span>
              )
            }
            return answer
          }},
          ...ltvSharedColumns
        ],
      }, ltvSharedConfig)
    ]

    const ltvLvl1 = [
      _.assign({
        url: '/overviewCampaignLtv.do',
        data: (row) => {
          return _.assign({}, this.state, {
            channel: !row ? this.getLevel(1).id : row.id
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
          ...ltvSharedColumns
        ],
      }, ltvSharedConfig)
    ]

    const ltvLvl2 = [
      _.assign({
        url: '/overviewPublisherLtv.do',
        data: (row) => {
          return _.assign({}, this.state, {
            campaign: !row ? this.getLevel(2).id : row.id
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
          ...ltvSharedColumns
        ]
      }, ltvSharedConfig)
    ]

    const ltvLvl3 = [
      _.assign({
        url: '/overviewSiteLtv.do',
        data: (row) => {
          return _.assign({}, this.state, {
            publisher: row.x,
            campaign: !row ? this.getLevel(2).id : row.id
          })
        },
        columns: [
          {title: '全部', dataIndex: 'x', key: '0', width: '10%', render: (val, row, index) => {
            return (
              <span>{val}</span>
            )
          }},
          ...ltvSharedColumns
        ],
      }, ltvSharedConfig)
    ]

    const trendingColumns = [
      {title: '点击', dataIndex: 'y0', width: '15%', key: '1'},
      {title: '激活', dataIndex: 'y1', width: '15%', key: '2'},
      {title: '转化率', dataIndex: 'y2', width: '15%', key: '3'},
      {title: '付费', dataIndex: 'y3', width: '15%', key: '4'},
      {title: '人均LTV', dataIndex: 'y4', width: '15%', key: '5'}
    ]

    const trendingLvl0 = [
      {
        url: '/overviewTopNChannelLtv.do',
        data: () => {
          return this.state
        },
        columns: trendingColumns,
        subTabName: '分渠道',
        rowKey: (row) => row.x,
        showSwitcher: false,
        children: [
          {
            url: '/overviewTotalTopNChannelLtv.do',
            tabName: '汇总',
            data: () => {
              return this.state
            },
            columns: trendingColumns,
            rowKey: (row) => row.x,
            showSwitcher: false,
          }
        ]
      }
    ]

    let ratioClick = [
      {
        url: '/overviewClickRatioLtv.do',
        data: () => {
          return _.assign({}, this.state, {
            activeType: this.state.activeTypeRatioClick
          })
        },
        columns: [
          {title: 'x', dataIndex: 'x', key: '2', render: (val, row, index) => {
            return (
              <span>
                {val}
              </span>
            )
          }},
          {title: 'y2', dataIndex: 'y2', key: '6'}
        ],
        rowKey: (row) => row.x,
        chart: {chart: {type: 'pie'}},
        showSwitcher: false
      }
    ]

    let ratioActive = [
      {
        url: '/overviewActiveRatioLtv.do',
        data: () => {
          return _.assign({}, this.state, {
            activeType: this.state.activeTypeRatioActive
          })
        },
        columns: [
          {title: 'x', dataIndex: 'x', key: '2', render: (val, row, index) => {
            return (
              <span>
                {val}
              </span>
            )
          }},
          {title: 'y2', dataIndex: 'y2', key: '6'}
        ],
        rowKey: (row) => row.x,
        chart: {chart: {type: 'pie'}},
        showSwitcher: false
      }
    ]

    let ratioRevenue = [
      {
        url: '/overviewRevenueRatioLtv.do',
        data: () => {
          return _.assign({}, this.state, {
            activeType: this.state.activeTypeRatioRevenue
          })
        },
        columns: [
          {title: 'x', dataIndex: 'x', key: '2', render: (val, row, index) => {
            return (
              <span>
                {val}
              </span>
            )
          }},
          {title: 'y2', dataIndex: 'y2', key: '6'}
        ],
        rowKey: (row) => row.x,
        chart: {chart: {type: 'pie'}},
        showSwitcher: false
      }
    ]

    let coreLtvTitle = (
      <div>
        <span>新增激活-LTV指标转化</span>
        <div className="pull-right" >
          <Tips tips={ltvTips}/>
        </div>
      </div>)

    let coreTrendingTitle = (
      <div>
        <span>转化趋势</span>
        <div className="pull-right" >
          <Tips tips={trendingTips}/>
        </div>
      </div>)

    let coreRatioTitle = (
      <div>
        <span>转化占比</span>
        <div className="pull-right" >
          <Tips tips={ratioTips}/>
        </div>
      </div>)

    const ratioActiveTitle = (
      <CheckBox name="激活占比" onChange={this.setActiveTypeRatioActive} />
    )

    const ratioRevenueTitle = (
      <CheckBox name="付费占比" onChange={this.setActiveTypeRatioRevenue} />
    )

    let props = this.props

    return (
      <div>
        <ContainerHeader>
          <DateFilter
            setDateFilter={this.setDateFilter}
            start={start}
            end={end}
          />
        </ContainerHeader>
        <MixedPanelContainer
          id="coreLtv"
          ref="coreLtv"
          actions={props.actions}
          states={props.states}
          title={coreLtvTitle}
          layout="table"
          level0={ltvLvl0}
          level1={ltvLvl1}
          level2={ltvLvl2}
          level3={ltvLvl3}
        />
        <MixedPanelContainer
          id="coreTrending"
          ref="coreTrending"
          actions={props.actions}
          states={props.states}
          title={coreTrendingTitle}
          layout="chart"
          level0={trendingLvl0}
        />
        <div className="panel panel-track">
          <div className="panel-heading">{coreRatioTitle}</div>
          <div className="panel-body">
            <div className="row panelPieRow">
              <div className="col-md-6">
                <MixedPanelContainer
                  id="coreRatioClick"
                  ref="coreRatioClick"
                  actions={props.actions}
                  states={props.states}
                  title="点击占比"
                  layout="chart"
                  level0={ratioClick}
                />
              </div>
              <div className="col-md-6">
                <MixedPanelContainer
                  id="coreRatioActive"
                  ref="coreRatioActive"
                  actions={props.actions}
                  states={props.states}
                  title={ratioActiveTitle}
                  layout="chart"
                  level0={ratioActive}
                />
              </div>
            </div>
            <div className="row panelPieRow">
              <div className="col-md-6">
                <MixedPanelContainer
                  id="coreRatioRevenue"
                  ref="coreRatioRevenue"
                  actions={props.actions}
                  states={props.states}
                  title={ratioRevenueTitle}
                  layout="chart"
                  level0={ratioRevenue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
