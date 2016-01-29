/**
 * 概览数据
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

const analysisTips = _.filter(tips, 'module', '概览指标分析')
const ratioTips = _.filter(tips, 'module', '占比')
const eventTips = _.filter(tips, 'module', '点击及安装')

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
      startdate: moment().add(-118, 'days').format('YYYYMMDD'),
      enddate: moment().add(-88, 'days').format('YYYYMMDD'),
      topn: 10,
      activeType: 1,
      eventId: 1
    })
  },

  showChildLevel(row, level) {
    let tabConfig = this.refs.summaryAnalysis.getLevelConfig(`level${level}`)[0]
    this.refs.summaryAnalysis.dispatchAction('mixedPanelShowChildLevel', {
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
      enddate: endDate
    }, function() {
      this.refs.summaryClickInstall.reload()
      this.refs.summaryActiveRate.reload()
      this.refs.summaryRatioInstall.reload()
      this.refs.summaryAnalysis.reload()
      this.refs.summaryEvent.reload()
      // this.refs.summaryRatioRealInstall.reload()
      this.refs.summaryRatioActive.reload()
      this.refs.summaryRatioRevenue.reload()
    })
  },

  setActiveTypeRatioRealInstall(activeType) {
    this.setState({activeTypeRatioRealInstall: activeType}, function() {
      this.refs.summaryRatioRealInstall.reload()
    })
  },

  setActiveTypeRatioPayUser(activeType) {
    this.setState({activeTypeRatioPayUser: activeType}, function() {
      this.refs.summaryRatioActive.reload()
    })
  },

  setActiveTypeRatioRevenue(activeType) {
    this.setState({activeTypeRatioRevenue: activeType}, function() {
      this.refs.summaryRatioRevenue.reload()
    })
  },

  formatCurrency(currency) {
    return (<span className="currency">{utils.asCurrency(currency)}</span>)
  },

  getLevel(i) {
    return this.props.states.summaryAnalysis.breadCrumbRowList[i]
  },


  render() {
    let clickInstallLvl0 = [
      {
        url: '/overviewAppSummary.do',
        data: () => {
          return this.state
        },
        columns: [
          {title: '日期', dataIndex: 'x', width: '25%', key: '0'},
          {title: '点击', dataIndex: 'y0', width: '25%', key: '1'},
          {title: '推广安装', dataIndex: 'y1', width: '25%', key: '2'},
          {title: '自然安装', dataIndex: 'y2', width: '25%', key: '3'}
        ],
        rowKey: (row) => row.x,
        showSwitcher: false,
        glance: this.props.states.summaryClickInstall.glance
      }
    ]

    const analysisSharedColumns = [
      {title: '点击', dataIndex: 'y0', key: '1', width: '8%',
        render: (val) => {
          return (<span>{utils.asInteger(val)}</span>)
        }
      },
      {title: '激活', dataIndex: 'y1', key: '2', width: '8%',
        render: (val) => {
          return (<span>{utils.asInteger(val)}</span>)
        }
      },
      {title: '转化率', dataIndex: 'y2', key: '3', width: '8%',
        render: (val) => {
          return (<span>{utils.asPercentage(val)}</span>)
        }
      },
      {title: '平均活跃', dataIndex: 'y3', key: '4', width: '8%',
        render: (val) => {
          return (<span>{utils.asNumber(val)}</span>)
        }
      },
      {title: '付费数', dataIndex: 'y4', key: '5', width: '8%',
        render: (val) => {
          return (<span>{utils.asInteger(val)}</span>)
        }
      },
      {title: '付费额', dataIndex: 'y5', key: '6', width: '8%',
        render: (val) => {
          return (<span className="currency">{utils.asCurrency(val)}</span>)
        }
      }
      // {title: '平均ARPU', dataIndex: 'y6', key: '7', width: '8%',
      //   render: (val) => {
      //     return (<span>{utils.asInteger(val)}</span>)
      //   }
      // },
      // {title: '平均ARPPU', dataIndex: 'y7', key: '8', width: '8%',
      //   render: (val) => {
      //     return (<span>{utils.asInteger(val)}</span>)
      //   }
      // }
    ]

    const analysisSharedConfig = {
      rowKey: (row) => row.x,
      showSwitcher: false,
      formatters: ['合计', utils.asInteger, utils.asInteger, utils.asPercentage,
        utils.asNumber, utils.asInteger, this.formatCurrency, utils.asInteger, utils.asInteger]
    }

    let analysisLvl0 = [
      _.assign({
        url: '/overviewChannelSummaryByAppid.do',
        data: () => {
          return this.state
        },
        columns: [
          {title: '广告网络', dataIndex: 'x', key: '0', width: '12%', render: (val, row, index) => {
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
          ...analysisSharedColumns
        ]
      }, analysisSharedConfig)
    ]

    let analysisLvl1 = [
      _.assign({
        url: '/overviewCampaignSummaryByChannelid.do',
        data: (row) => {
          return Object.assign({}, this.state, {
            channel: !row ? this.getLevel(0).id : row.id
          })
        },
        columns: [
          {title: '广告网络', dataIndex: 'x', key: '0', width: '12%', render: (val, row, index) => {
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

    let analysisLvl2 = [
      _.assign({
        url: '/overviewPublisherSummaryByCampaign.do',
        data: (row) => {
          return Object.assign({}, this.state, {
            campaign: !row ? this.getLevel(1).id : row.id
          })
        },
        columns: [
          {title: '广告网络', dataIndex: 'x', key: '0', width: '12%', render: (val, row, index) => {
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

    let analysisLvl3 = [
      _.assign({
        url: '/overviewSitesummaryByPublisher.do',
        data: (row) => {
          return Object.assign({}, this.state, {
            publisher: row.x,
            campaign: !row ? this.getLevel(1).id : row.id
          })
        },
        columns: [
          {title: '广告网络', dataIndex: 'x', key: '0', width: '12%'},
          ...analysisSharedColumns
        ],
      }, analysisSharedConfig)
    ]

    const tabShared = {
      url: '/overviewChannelSummaryByEventid.do',
      rowKey: (row) => row.x,
      subTabName: '分渠道',
      showSwitcher: false,
      children: [
        {
          url: '/overviewTotalChannelSummaryByEventid.do',
          tabName: '汇总',
          data: () => {
            return this.state
          },
          rowKey: (row) => row.x,
          showSwitcher: false
        }
      ]
    }

    const EventLvl0 = [
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
        tabName: '平均活跃',
        chart: {tooltipValueFormatter: utils.asNumber},
        data: () => {
          this.setState({eventId: 12})
          return Object.assign({}, this.state, {
            eventId: 12
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '付费数',
        data: () => {
          this.setState({eventId: 4})
          return Object.assign({}, this.state, {
            eventId: 4
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '付费额',
        data: () => {
          this.setState({eventId: 6})
          return Object.assign({}, this.state, {
            eventId: 6
          })
        },
      }, tabShared),
      Object.assign({
        tabName: '平均ARPU',
        data: () => {
          this.setState({eventId: 13})
          return Object.assign({}, this.state, {
            eventId: 13
          })
        }
      }, tabShared),
      Object.assign({
        tabName: '平均ARPPU',
        data: () => {
          this.setState({eventId: 14})
          return Object.assign({}, this.state, {
            eventId: 14
          })
        }
      }, tabShared)
    ]

    let activeRate = [
      {
        url: '/overviewActiveRate.do',
        data: () => {
          return this.state
        },
        columns: [
          {title: 'x', dataIndex: 'x', key: '0'},
          {title: 'y2', dataIndex: 'y2', key: '1'}
        ],
        rowKey: (row) => row.x,
        chart: {chart: {type: 'column'}},
        showSwitcher: false
      }
    ]

    let ratioInstall = [
      {
        url: '/overviewInstallRatio.do',
        data: () => {
          return this.state
        },
        columns: [
          {title: 'x', dataIndex: 'x', key: '0'},
          {title: 'y2', dataIndex: 'y2', key: '1'}
        ],
        rowKey: (row) => row.x,
        chart: {chart: {type: 'pie'}},
        showSwitcher: false,
        glance: this.props.states.summaryRatioInstall.glance
      }
    ]

    // let ratioRealInstall = [
    //   {
    //     url: '/overviewActiveRate.do',
    //     data: () => {
    //       return Object.assign({}, this.state, {
    //         activeType: this.state.activeTypeRatioRealInstall
    //       })
    //     },
    //     columns: [
    //       {title: 'x', dataIndex: 'x', key: '2', render: (val, row, index) => {
    //         return (
    //           <span>
    //             {val}
    //           </span>
    //         )
    //       }},
    //       {title: 'y2', dataIndex: 'y2', key: '6'}
    //     ],
    //     rowKey: (row) => row.x,
    //     chart: {chart: {type: 'pie'}},
    //     showSwitcher: false
    //   }
    // ]

    let ratioPayUser = [
      {
        url: '/overviewPayUserRatio.do',
        data: () => {
          return Object.assign({}, this.state, {
            activeType: this.state.activeTypeRatioPayUser
          })
        },
        rowKey: (row) => row.x,
        chart: {chart: {type: 'pie'}},
        showSwitcher: false
      }
    ]

    let ratioRevenue = [
      {
        url: '/overviewRevenueRatio.do',
        data: () => {
          return Object.assign({}, this.state, {
            activeType: this.state.activeTypeRatioRevenue
          })
        },
        rowKey: (row) => row.x,
        chart: {chart: {type: 'pie'}},
        showSwitcher: false
      }
    ]

    let summaryClickInstallTitle = (
      <div>
        <span>点击及安装</span>
        <div className="pull-right" >
          <Tips tips={eventTips}/>
        </div>
      </div>)

    let summaryAnalysisTitle = (
      <div>
        <span>概览指标分析</span>
        <div className="pull-right" >
          <Tips tips={analysisTips}/>
        </div>
      </div>)

    let summaryEventTitle = (
      <div>
        <span>概览指标对比</span>
        <div className="pull-right" >
          <Tips tips={eventTips}/>
        </div>
      </div>)

    let summaryRatioTitle = (
      <div>
        <span>占比</span>
        <div className="pull-right" >
          <Tips tips={ratioTips}/>
        </div>
      </div>)

    // const RatioRealInstallTitle = (
    //   <CheckBox name="有效安装占比" onChange={this.setActiveTypeRatioRealInstall} />
    // )

    const ratioPayUserTitle = (
      <CheckBox name="付费设备占比" onChange={this.setActiveTypeRatioPayUser} />
    )

    const ratioRevenueTitle = (
      <CheckBox name="付费额占比" onChange={this.setActiveTypeRatioRevenue} />
    )

    let props = this.props

    return (
      <div>
        <ContainerHeader>
          <DateFilter setDateFilter={this.setDateFilter} showInterval={false}/>
        </ContainerHeader>
        <MixedPanelContainer
          ref="summaryClickInstall"
          id="summaryClickInstall"
          actions={props.actions}
          states={props.states}
          title={summaryClickInstallTitle}
          layout="chart"
          level0={clickInstallLvl0}
        />
        <div className="row">
          <div className="col-md-6">
            <MixedPanelContainer
              id="summaryActiveRate"
              ref="summaryActiveRate"
              actions={props.actions}
              states={props.states}
              title="转化对比"
              layout="chart"
              level0={activeRate}
              style={{minHeight: '514px'}}
            />
          </div>
          <div className="col-md-6">
            <MixedPanelContainer
              id="summaryRatioInstall"
              ref="summaryRatioInstall"
              actions={props.actions}
              states={props.states}
              title="安装占比"
              layout="chart"
              level0={ratioInstall}
              style={{minHeight: '514px'}}
            />
          </div>
        </div>
        <MixedPanelContainer
          id="summaryAnalysis"
          ref="summaryAnalysis"
          actions={props.actions}
          states={props.states}
          title={summaryAnalysisTitle}
          layout="table"
          level0={analysisLvl0}
          level1={analysisLvl1}
          level2={analysisLvl2}
          level3={analysisLvl3}
        />
        <MixedPanelContainer
          id="summaryEvent"
          ref="summaryEvent"
          actions={props.actions}
          states={props.states}
          title={summaryEventTitle}
          layout="chart"
          level0={EventLvl0}
        />
        <div className="panel panel-track">
          <div className="panel-heading">{summaryRatioTitle}</div>
          <div className="panel-body">
            <div className="row panelPieRow">
              <div className="col-md-6">
                <MixedPanelContainer
                  id="summaryRatioActive"
                  ref="summaryRatioActive"
                  actions={props.actions}
                  states={props.states}
                  title={ratioPayUserTitle}
                  layout="chart"
                  level0={ratioPayUser}
                />
              </div>
              <div className="col-md-6">
                <MixedPanelContainer
                  id="summaryRatioRevenue"
                  ref="summaryRatioRevenue"
                  actions={props.actions}
                  states={props.states}
                  title={ratioRevenueTitle}
                  layout="chart"
                  level0={ratioRevenue}
                />
              </div>
            </div>
            <div className="row panelPieRow">
            </div>
          </div>
        </div>
      </div>
    )
  }
})

                // <MixedPanelContainer
                //   id="summaryRatioRealInstall"
                //   ref="summaryRatioRealInstall"
                //   actions={props.actions}
                //   states={props.states}
                //   title={RatioRealInstallTitle}
                //   layout="chart"
                //   level0={ratioRealInstall}
                //   chart={{legend: {enabled: false}}}
                // />
