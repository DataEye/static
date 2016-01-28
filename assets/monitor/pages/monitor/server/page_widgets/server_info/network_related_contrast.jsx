import React, {PropTypes} from 'react'
import {FEATRUE_IDS} from '../../../../../helpers/constants.jsx'
import MixedPanelContainer from '../../../../../components/mixed_panel/container.jsx'

export default React.createClass({
  propTypes: {
    actions: PropTypes.object,
    states: PropTypes.object,
    data: PropTypes.object
  },
  render() {
    let chartConfigArr
    //内网网卡出流量
    const comparedIntranetOutFlowTitle = (
      <div>
        <span>内网网卡出流量</span>
      </div>)
    const intranetOutFlowFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '内网网卡出流量'})[0]
    const comparedIntranetOutFlow = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: intranetOutFlowFeatrue.featrueID, object: intranetOutFlowFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //内网网卡入流量
    const comparedIntranetEntFlowTitle = (
      <div>
        <span>内网网卡入流量</span>
      </div>)
    const intranetEntFlowFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '内网网卡入流量'})[0]
    const comparedIntranetEntFlow = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: intranetEntFlowFeatrue.featrueID, object: intranetEntFlowFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //外网网卡出流量
    const comparedExtranetOutFlowTitle = (
      <div>
        <span>外网网卡出流量</span>
      </div>)
    const comparedExtranetOutFlowFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '外网网卡出流量'})[0]
    const comparedExtranetOutFlow = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedExtranetOutFlowFeatrue.featrueID, object: comparedExtranetOutFlowFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // 外网网卡入流量
    const comparedExtranetEntFlowTitle = (
      <div>
        <span> 外网网卡入流量</span>
      </div>)
    const comparedExtranetEntFlowFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '外网网卡入流量'})[0]
    const comparedExtranetEntFlow = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedExtranetEntFlowFeatrue.featrueID, object: comparedExtranetEntFlowFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // 内网网卡出包量
    const comparedIntranetOutPackageVolumeTitle = (
      <div>
        <span>内网网卡出包量</span>
      </div>)
    const comparedIntranetOutPackageVolumeFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '内网网卡出包量'})[0]
    const comparedIntranetOutPackageVolume = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedIntranetOutPackageVolumeFeatrue.featrueID, object: comparedIntranetOutPackageVolumeFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // 内网网卡入包量
    const comparedIntranetEntPackageVolumeTitle = (
      <div>
        <span>内网网卡入包量</span>
      </div>)
    const comparedIntranetEntPackageVolumeFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '内网网卡入包量'})[0]
    const comparedIntranetEntPackageVolume = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedIntranetEntPackageVolumeFeatrue.featrueID, object: comparedIntranetEntPackageVolumeFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // 外网网卡出包量
    const comparedExtranetOutPackageVolumeTitle = (
      <div>
        <span>外网网卡出包量</span>
      </div>)
    const comparedExtranetOutPackageVolumeFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '外网网卡出包量'})[0]
    const comparedExtranetOutPackageVolume = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedExtranetOutPackageVolumeFeatrue.featrueID, object: comparedExtranetOutPackageVolumeFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    // 外网网卡入包量
    const comparedExtranetEntPackageVolumeTitle = (
      <div>
        <span>外网网卡入包量</span>
      </div>)
    const comparedExtranetEntPackageVolumeFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '外网网卡入包量'})[0]
    const comparedExtranetEntPackageVolume = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedExtranetEntPackageVolumeFeatrue.featrueID, object: comparedExtranetEntPackageVolumeFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //被动打开TCP连接数
    const comparedPassiveTcpConnTitle = (
      <div>
        <span>被动打开TCP连接数</span>
      </div>)
    const comparedPassiveTcpConnFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '被动打开TCP连接数'})[0]
    const comparedPassiveTcpConn = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedPassiveTcpConnFeatrue.featrueID, object: comparedPassiveTcpConnFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //TCP连接数
    const comparedTcpConnTitle = (
      <div>
        <span>被动打开TCP连接数</span>
      </div>)
    const comparedTcpConnFeatrue = FEATRUE_IDS.filter((item) => {return item.name === '被动打开TCP连接数'})[0]
    const comparedTcpConn = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedTcpConnFeatrue.featrueID, object: comparedTcpConnFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //UDP接收数据报
    const comparedUDPReceiveDatagramsTitle = (
      <div>
        <span>UDP接收数据报</span>
      </div>)
    const comparedUDPReceiveDatagramsFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'UDP接收数据报'})[0]
    const comparedUDPReceiveDatagrams = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedUDPReceiveDatagramsFeatrue.featrueID, object: comparedUDPReceiveDatagramsFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //UDP发送数据报
    const comparedUDPSendDatagramsTitle = (
      <div>
        <span>UDP发送数据报</span>
      </div>)
    const comparedUDPSendDatagramsFeatrue = FEATRUE_IDS.filter((item) => {return item.name === 'UDP发送数据报'})[0]
    const comparedUDPSendDatagrams = [
      {
        url: '/monitor/getComparedNetworkUsage.do',
        data: Object.assign({}, this.props.data,
          {featrueID: comparedUDPSendDatagramsFeatrue.featrueID, object: comparedUDPSendDatagramsFeatrue.object}),
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    chartConfigArr = [
      {
        id: 'comparedIntranetOutFlow',
        title: comparedIntranetOutFlowTitle,
        level0: comparedIntranetOutFlow
      },
      {
        id: 'comparedIntranetEntFlow',
        title: comparedIntranetEntFlowTitle,
        level0: comparedIntranetEntFlow
      },
      {
        id: 'comparedExtranetOutFlow',
        title: comparedExtranetOutFlowTitle,
        level0: comparedExtranetOutFlow
      },
      {
        id: 'comparedExtranetEntFlow',
        title: comparedExtranetEntFlowTitle,
        level0: comparedExtranetEntFlow
      },
      {
        id: 'comparedIntranetOutPackageVolume',
        title: comparedIntranetOutPackageVolumeTitle,
        level0: comparedIntranetOutPackageVolume
      },
      {
        id: 'comparedIntranetEntPackageVolume',
        title: comparedIntranetEntPackageVolumeTitle,
        level0: comparedIntranetEntPackageVolume
      },
      {
        id: 'comparedExtranetOutPackageVolume',
        title: comparedExtranetOutPackageVolumeTitle,
        level0: comparedExtranetOutPackageVolume
      },
      {
        id: 'comparedExtranetEntPackageVolume',
        title: comparedExtranetEntPackageVolumeTitle,
        level0: comparedExtranetEntPackageVolume
      },
      {
        id: 'comparedPassiveTcpConn',
        title: comparedPassiveTcpConnTitle,
        level0: comparedPassiveTcpConn
      },
      {
        id: 'comparedTcpConn',
        title: comparedTcpConnTitle,
        level0: comparedTcpConn
      },
      {
        id: 'comparedUDPReceiveDatagrams',
        title: comparedUDPReceiveDatagramsTitle,
        level0: comparedUDPReceiveDatagrams
      },
      {
        id: 'comparedUDPSendDatagrams',
        title: comparedUDPSendDatagramsTitle,
        level0: comparedUDPSendDatagrams
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
