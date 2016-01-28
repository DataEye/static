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
    //内存使用率
    const memTotalUsageTitle = (
      <div>
        <span>内存使用率</span>
      </div>)
    const memTotalUsage = [
      {
        url: '/monitor/getMemTotalUsage.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //内存使用详情
    const memUseStateTitle = (
      <div>
        <span>内存使用详情</span>
      </div>)
    const memUseState = [
      {
        url: '/monitor/getMemUseState.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //SWAP内存使用率
    const swapMemTotalUsageTitle = (
      <div>
        <span>SWAP内存使用率</span>
      </div>)
    const swapMemTotalUsage = [
      {
        url: '/monitor/getSwapMemTotalUsage.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    //SWAP内存使用量
    const swapMemUseStateTitle = (
      <div>
        <span>SWAP内存使用量</span>
      </div>)
    const swapMemUseState = [
      {
        url: '/monitor/getSwapMemUseState.do',
        data: this.props.data,
        rowKey: (row) => {
          return row.x
        },
        showSwitcher: false
      }
    ]
    chartConfigArr = [
      {
        id: 'memTotalUsage',
        title: memTotalUsageTitle,
        level0: memTotalUsage
      },
      {
        id: 'memUseState',
        title: memUseStateTitle,
        level0: memUseState
      },
      {
        id: 'swapMemTotalUsage',
        title: swapMemTotalUsageTitle,
        level0: swapMemTotalUsage
      },
      {
        id: 'swapMemUseState',
        title: swapMemUseStateTitle,
        level0: swapMemUseState
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
