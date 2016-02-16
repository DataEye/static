import React, {PropTypes} from 'react'
import DateFilter from '../../../../../widgets/date_filter.jsx'
import Tabs from '../../../../../widgets/tabs.jsx'
import {TABS} from '../../../../../helpers/constants.jsx'
import CPURelatedTendency from './CPU_related_tendency.jsx'
import CPURelatedContrast from './CPU_related_contrast.jsx'
import NetworkRelatedTendency from './network_related_tendency.jsx'
import NetworkRelatedContrast from './network_related_contrast.jsx'
import RAMRelatedTendency from './RAM_related_tendency.jsx'
import RAMRelatedContrast from './RAM_related_contrast.jsx'
import IORelatedTendency from './IO_related_tendency.jsx'
import IORelatedContrast from './IO_related_contrast.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    goBack: PropTypes.func,
    serverID: PropTypes.number,
    hostName: PropTypes.string,
    ip: PropTypes.array
  },

  getInitialState() {
    return {
      chartType: 'tendency',
      choicedTab: 'CPU相关'
    }
  },

  changeChartType(chartType) {
    this.setState({chartType})
  },

  dateComfirm(dateInfo) {
    this.setState({chartType: dateInfo.type})
    if (dateInfo.type === 'tendency') {
      this.setState({
        contrastComfirm: false,
        tendencyData: {
          serverID: this.props.serverID,
          startdate: dateInfo.date.start,
          enddate: dateInfo.date.end
        }
      })
    } else if (dateInfo.type === 'contrast') {
      this.setState({
        contrastComfirm: true,
        contrastData: {
          serverID: this.props.serverID,
          startdate: dateInfo.date[0].start,
          enddate: dateInfo.date[0].end,
          starttime: dateInfo.date[1].start,
          endtime: dateInfo.date[1].end
        }
      })
    }
    let choicedTab = this.state.choicedTab
    this.setState({choicedTab: ''})
    setTimeout(() =>{
      this.setState({choicedTab: choicedTab})
    }, 1)
  },

  choiceTab(tabName) {
    if (!this.state.contrastComfirm) {
      this.setState({chartType: 'tendency'})
    }
    this.setState({choicedTab: tabName})
  },

  toTop() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  },

  render() {
    let header, content
    let charts
    if (this.state.tendencyData || this.state.contrastData) {
      switch (this.state.choicedTab) {
      case 'CPU相关':
        if (this.state.chartType === 'tendency') {
          charts = <CPURelatedTendency data={this.state.tendencyData} actions={this.props.actions} states={this.props.states}/>
        } else if (this.state.contrastComfirm) {
          charts = <CPURelatedContrast data={this.state.contrastData} actions={this.props.actions} states={this.props.states}/>
        }
        break
      case '网络相关':
        if (this.state.chartType === 'tendency') {
          charts = <NetworkRelatedTendency data={this.state.tendencyData} actions={this.props.actions} states={this.props.states}/>
        } else if (this.state.contrastComfirm) {
          charts = <NetworkRelatedContrast data={this.state.contrastData} actions={this.props.actions} states={this.props.states}/>
        }
        break
      case '内存相关':
        if (this.state.chartType === 'tendency') {
          charts = <RAMRelatedTendency data={this.state.tendencyData} actions={this.props.actions} states={this.props.states}/>
        } else if (this.state.contrastComfirm) {
          charts = <RAMRelatedContrast data={this.state.contrastData} actions={this.props.actions} states={this.props.states}/>
        }
        break
      case 'IO相关':
        if (this.state.chartType === 'tendency') {
          charts = <IORelatedTendency data={this.state.tendencyData} actions={this.props.actions} states={this.props.states}/>
        } else if (this.state.contrastComfirm) {
          charts = <IORelatedContrast data={this.state.contrastData} actions={this.props.actions} states={this.props.states}/>
        }
        break
      //case '基础信息':
      //  console.log('基础信息')
      //  break
      //case '硬件状态':
      //  console.log('硬件状态')
      //  break
      default :
      }
    }

    header = (
        <div className="container-header">
          <div className="header clearfix">
            <div className="server-info pull-left">
              <p className="host-name">主机： {this.props.hostName}</p>
              <p className="ip">内网IP: {this.props.ip[0]}&nbsp;&nbsp;外网IP: {this.props.ip[1]}</p>
            </div>
            <div className="go-back pull-right" onClick={this.props.goBack}>
            </div>
          </div>
          <div className="space"></div>
        </div>
    )
    content = (
        <div className="content">
          <DateFilter onConfirm={this.dateComfirm} type={this.state.chartType} changeType={this.changeChartType}/>
          <div>
            <Tabs choiceTab={this.choiceTab} tabs={TABS} choicedTab={this.state.choicedTab} title="特性类别" />
          </div>
          <div className="serverInfo">
            {!charts && !this.state.contrastComfirm && this.state.chartType === 'contrast' ?
              <div className="text-center">请选择日期并点击“比较"按钮来查看折线图</div> : ''}
            {
              charts ? charts : ''
            }
          </div>
        </div>
    )

    return (
        <div>
          {header}
          {content}
          <div className="to-top" onClick={this.toTop}>
            <i className="fa fa-arrow-up"></i>
            <em>回到顶部</em>
          </div>
        </div>
    )
  }
})
