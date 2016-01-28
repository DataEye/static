import React, {PropTypes} from 'react'
import MixedPanelContainer from '../../../../../components/mixed_panel/container.jsx'

export default React.createClass({
  propTypes: {
    actions: PropTypes.object,
    states: PropTypes.object,
    data: PropTypes.object
  },
  render() {
    let chartConfigArr
    //内网网卡出入流量
    const intranetNICFlowTitle = (
      <div>
        <span>内网网卡出入流量</span>
      </div>)
    const intranetNICFlow = [
      {
        url: '/monitor/getIntranetNICFlow.do',
        data: this.props.data,
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
        data: this.props.data,
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
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //外网网卡出入包量
    const extranetNICPackageVolumeTitle = (
      <div>
        <span>外网网卡出入包量</span>
      </div>)
    const extranetNICPackageVolume = [
      {
        url: '/monitor/getExtranetNICPackageVolume.do',
        data: this.props.data,
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
        data: this.props.data,
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
        data: this.props.data,
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
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    chartConfigArr = [
      {
        id: 'intranetNICFlow',
        title: intranetNICFlowTitle,
        level0: intranetNICFlow
      },
      {
        id: 'intranetNICPackageVolume',
        title: intranetNICPackageVolumeTitle,
        level0: intranetNICPackageVolume
      },
      {
        id: 'extranetNICFlow',
        title: extranetNICFlowTitle,
        level0: extranetNICFlow
      },
      {
        id: 'extranetNICPackageVolume',
        title: extranetNICPackageVolumeTitle,
        level0: extranetNICPackageVolume
      },
      {
        id: 'tcpConn',
        title: tcpConnTitle,
        level0: tcpConn
      },
      {
        id: 'passiveTcpConn',
        title: passiveTcpConnTitle,
        level0: passiveTcpConn
      },
      {
        id: 'UDPDatagram',
        title: UDPDatagramTitle,
        level0: UDPDatagram
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
