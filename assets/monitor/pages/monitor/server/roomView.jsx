import React, {PropTypes} from 'react'
import ContainerHeader from '../../../widgets/container_header.jsx'
import PageNav from '../../../widgets/page_nav.jsx'
import Loading from '../../../components/loading.jsx'
import Search from '../../../widgets/search_bar.jsx'
import TableComponent from './page_widgets/serverTable.jsx'
import DateFilter from '../../../widgets/date_filter.jsx'
import Tabs from '../../../widgets/tabs.jsx'
import {TABS, FEATRUE_IDS} from '../../../helpers/constants.jsx'
import MixedPanelContainer from '../../../components/mixed_panel/container.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav: PropTypes.string
  },

  getInitialState() {
    return {
      isChartView: false,
      choicedTab: 'CPU相关',
      pageID: 1,
      pageSize: 50,
      searchkey: ''
    }
  },

  componentDidMount() {
    this.query()
  },

  search: function(searchKey) {
    this.setState({
      pageID:1,
      pageSize:this.state.pageSize,
      searchkey:searchKey
    })

    this.query()
  },

  clear: function() {
    this.setState(
      {searchKey:''}
    )
  },

  pageChange: function(pageID, pageSize) {
    this.setState({
      pageID:pageID,
      pageSize:pageSize
    })
    this.query()
  },

  query: function() {
    let idcId = this.props.params.idcId
    this.props.actions.servermonitorQueryIdcServer({
      idcId:idcId,
      searchkey:this.state.searchKey,
      pageID:this.state.pageID,
      pageSize:this.state.pageSize,
      orderBy:'hostName',
      order:0
    })
  },

  viewChart(serverID, hostName, ip) {
    this.setState({
      isChartView: true,
      serverID,
      hostName,
      ip
    })
  },

  dateComfirm(dateInfo) {
    this.setState({chartType: dateInfo.type})
    if (dateInfo.type === 'tendency') {
      console.log(dateInfo.date)
      this.setState({tendencyDate: dateInfo.date})
    } else if (dateInfo.type === 'contrast') {
      console.log(dateInfo.date)
      this.setState({contrastDate: dateInfo.date})
    }
  },

  choiceTab(tabName) {
    this.setState({choicedTab: tabName})
  },

  goBack() {
    this.setState({isChartView: false})
  },

  render() {
    let header, content
    if (!this.state.isChartView) {
      header = (
      <ContainerHeader>
        <PageNav pageNav={this.props.pageNav} />
      </ContainerHeader>
      )
      content = (
          <div className="content">
            <div className="main">
              <div className="content-header clearfix form-horizontal">
                <Search search={this.search}
                        clear={this.clear}
                        ref="searchKey"
                        value={this.state.searchKey} />
              </div>
              <Loading loading={this.props.states.servermonitor.server.loading}>
                <TableComponent
                    total={this.props.states.servermonitor.server.totalRecord}
                    data={this.props.states.servermonitor.server.items}
                    pageChange={this.pageChange}
                    viewChart={this.viewChart}
                    />
              </Loading>
            </div>
          </div>
      )
    } else {
      let serverInfo
      switch (this.state.choicedTab) {
      case 'CPU相关':
        if (this.state.chartType === 'tendency') {
          //CPU 总利用率
          const cpuTotalUsageTitle = (
            <div>
              <span>CPU 总利用率</span>
            </div>)
          const cpuTotalUsage = [
            {
              url: '/monitor/getCpuTotalUsage.do',
              data: {
                serverID: this.state.serverID,
                startdate: this.state.tendencyDate.start,
                enddate: this.state.tendencyDate.end
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
              data: {
                serverID: this.state.serverID,
                startdate: this.state.tendencyDate.start,
                enddate: this.state.tendencyDate.end
              },
              rowKey: (row) => row.x,
              showSwitcher: false
            }
          ]
          //各cpu核心利率用
          const cpuEveryCoreUsageTitle = (
            <div>
              <span>各CPU核心利率用</span>
            </div>)
          const cpuEveryCoreUsage = [
            {
              url: '/monitor/getCpuEveryCoreUsage.do',
              data: {
                serverID: this.state.serverID,
                startdate: this.state.tendencyDate.start,
                enddate: this.state.tendencyDate.end
              },
              rowKey: (row) => row.x,
              showSwitcher: false
            }
          ]

          serverInfo = (
            <div className="serverInfo">
              <MixedPanelContainer
                id="cpuTotalUsage"
                actions={this.props.actions}
                states={this.props.states}
                title={cpuTotalUsageTitle}
                layout="chart"
                level0={cpuTotalUsage}
                />
              <MixedPanelContainer
                id="cpuEveryMinUsage"
                actions={this.props.actions}
                states={this.props.states}
                title={cpuEveryMinUsageTitle}
                layout="chart"
                level0={cpuEveryMinUsage}
                />
              <MixedPanelContainer
                id="cpuEveryCoreUsage"
                actions={this.props.actions}
                states={this.props.states}
                title={cpuEveryCoreUsageTitle}
                layout="chart"
                level0={cpuEveryCoreUsage}
                />
            </div>
          )
        } else if (this.state.chartType === 'contrast') {
          //CPU 利用率
          const cpuTotalUsageContrastTitle = (
            <div>
              <span>CPU 利用率</span>
            </div>)
          let cpuTotalUsageContrast = [
            {
              url: '/monitor/getComparedCpuUsage.do',
              data: {
                serverID: this.state.serverID,
                startdate: this.state.contrastDate[0].start,
                enddate: this.state.contrastDate[0].end,
                starttime: this.state.contrastDate[1].start,
                endtime: this.state.contrastDate[1].end,
                featrueID: FEATRUE_IDS.filter((item) => {return item.key === 'CPU 利用率'})[0].value
              },
              rowKey: (row) => {
                return row.x
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
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12',
                starttime: '2016-1-1',
                endtime: '2016-1-12',
                featrueID: FEATRUE_IDS.filter((item) => {return item.key === 'CPU 1分钟负载'})[0].value
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          serverInfo = (
            <div className="serverInfo">
              <MixedPanelContainer
                id="cpuTotalUsageContrast"
                actions={this.props.actions}
                states={this.props.states}
                title={cpuTotalUsageContrastTitle}
                layout="chart"
                level0={cpuTotalUsageContrast}
                />
              <MixedPanelContainer
                id="cpuOneMinUsageContrast"
                actions={this.props.actions}
                states={this.props.states}
                title={cpuOneMinUsageContrastTitle}
                layout="chart"
                level0={cpuOneMinUsageContrast}
                />
            </div>
          )
        }
        break
      case '网络相关':
        if (this.state.chartType === 'tendency') {
          //内网网卡出入流量
          const intranetNICFlowTitle = (
            <div>
              <span>内网网卡出入流量</span>
            </div>)
          const intranetNICFlow = [
            {
              url: '/monitor/getIntranetNICFlow.do',
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12'
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          //内网网卡出入包量
          const intranetNICPackageVolumeTitle = (
            <div>
              <span>内网网卡出入包量</span>
            </div>)
          const intranetNICPackageVolume = [
            {
              url: '/monitor/getIntranetNICPackageVolume.do',
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12'
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          //外网网卡出入流量
          const extranetNICFlowTitle = (
            <div>
              <span>外网网卡出入流量</span>
            </div>)
          const extranetNICFlow = [
            {
              url: '/monitor/getExtranetNICFlow.do',
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12'
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          //TCP连接数
          const tcpConnTitle = (
            <div>
              <span>TCP连接数</span>
            </div>)
          const tcpConn = [
            {
              url: '/monitor/getTcpConn.do',
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12'
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          //被动打开的TCP连接数
          const passiveTcpConnTitle = (
            <div>
              <span>被动打开的TCP连接数</span>
            </div>)
          const passiveTcpConn = [
            {
              url: '/monitor/getPassiveTcpConn.do',
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12'
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          //UDP收发数据报
          const UDPDatagramTitle = (
            <div>
              <span>UDP收发数据报</span>
            </div>)
          const UDPDatagram = [
            {
              url: '/monitor/getUDPDatagram.do',
              data: {
                serverID: this.state.serverID,
                startdate: '2016-1-1',
                enddate: '2016-1-12'
              },
              rowKey: (row) => {
                return row.x
              },
              showSwitcher: false
            }
          ]
          serverInfo = (
            <div className="serverInfo">
              <MixedPanelContainer
                id="intranetNICFlow"
                actions={this.props.actions}
                states={this.props.states}
                title={intranetNICFlowTitle}
                layout="chart"
                level0={intranetNICFlow}
                />
              <MixedPanelContainer
                id="intranetNICPackageVolume"
                actions={this.props.actions}
                states={this.props.states}
                title={intranetNICPackageVolumeTitle}
                layout="chart"
                level0={intranetNICPackageVolume}
                />
              <MixedPanelContainer
                id="extranetNICFlow"
                actions={this.props.actions}
                states={this.props.states}
                title={extranetNICFlowTitle}
                layout="chart"
                level0={extranetNICFlow}
                />
              <MixedPanelContainer
                id="tcpConn"
                actions={this.props.actions}
                states={this.props.states}
                title={tcpConnTitle}
                layout="chart"
                level0={tcpConn}
                />
              <MixedPanelContainer
                id="passiveTcpConn"
                actions={this.props.actions}
                states={this.props.states}
                title={passiveTcpConnTitle}
                layout="chart"
                level0={passiveTcpConn}
                />
              <MixedPanelContainer
                id="UDPDatagram"
                actions={this.props.actions}
                states={this.props.states}
                title={UDPDatagramTitle}
                layout="chart"
                level0={UDPDatagram}
                />
            </div>
          )
        } else if (this.state.chartType === 'contrast') {
          console.log('网络相关 contrast')
        }
        break
      case '内存相关':
        if (this.state.chartType === 'tendency') {
          console.log('内存相关 tendency')
        } else if (this.state.chartType === 'contrast') {
          console.log('内存相关 contrast')
        }
        break
      case 'IO相关':
        if (this.state.chartType === 'tendency') {
          console.log('IO相关 tendency')
        } else if (this.state.chartType === 'contrast') {
          console.log('IO相关 contrast')
        }
        break
      case '基础信息':
        console.log('基础信息')
        break
      case '硬件状态':
        console.log('硬件状态')
        break
      default :
        console.log('tab切换有问题')
      }


      header = (
          <div className="container-header">
            <div className="header clearfix">
              <div className="server-info pull-left">
                <p className="host-name">主机： {this.state.hostName}</p>
                <p className="ip">内网IP: {this.state.ip[0]}&nbsp;&nbsp;外网IP: {this.state.ip[1]}</p>
              </div>
              <div className="go-back pull-right" onClick={this.goBack}>
              </div>
            </div>
            <div className="space"></div>
          </div>
      )
      content = (
          <div className="content">
            <DateFilter onConfirm={this.dateComfirm} />
            <div>
              <Tabs choiceTab={this.choiceTab} tabs={TABS} choicedTab={this.state.choicedTab} title="特性类别" />
            </div>
            {serverInfo}
          </div>
      )
    }
    return (
        <div>
          {header}
          {content}
        </div>
    )
  }
})
