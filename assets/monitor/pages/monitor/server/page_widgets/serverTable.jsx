import React from 'react'
import {Table} from 'react-bootstrap'
import Pagination from 'rc-pagination'
import Select from 'rc-select'
import {PAGE_OPTIONS} from './../../../../helpers/constants.jsx'
Select.Option = 'div'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    totalRecord:React.PropTypes.number,
    viewChart: React.PropTypes.func,
    changePageID: React.PropTypes.func,
    changePageSize: React.PropTypes.func,
    pageID: React.PropTypes.number,
    pageSize: React.PropTypes.number
  },

  changePageID(pageID) {
    this.props.changePageID(pageID)
  },

  showTotal(total) {
    return `一共 ${total} 条数据`
  },

  viewChart(...serverInfo) {
    return () => {
      this.props.viewChart(...serverInfo)
    }
  },

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-body">
          <Table hover className="text_center">
            <thead>
            <tr>
              <th className="text_center">主机名</th>
              <th className="text_center">IP</th>
              <th className="text_center">机房</th>
              <th className="text_center">业务</th>
              <th className="text_center">CPU使用率</th>
              <th className="text_center">五分钟负载</th>
              <th className="text_center">健康状态</th>
              <th className="text_center">操作</th>
            </tr>
            </thead>

            <tbody>
            {
              this.props.data.map((item)=>{
                let privateIp = ''
                let publicIp = ''
                item.ip.map((deviceIp)=>{
                  if (deviceIp.value === 0) {
                    privateIp = privateIp + deviceIp.key
                  } else {
                    publicIp = publicIp + deviceIp.key
                  }
                })

                return (
                <tr key={item.serverID}>
                  <td>{item.hostName}</td>
                  <td className="ip">
                    <p>(内){privateIp}</p>
                    <p>(外){publicIp}</p>
                  </td>
                  <td>{item.machineRoom}</td>
                  <td>{item.business}</td>
                  <td>{item.cpuUsage}</td>
                  <td>{item.fiveLoad}</td>
                  <td><span className={item.status === 0 ? 'status-ok' : 'status-warn'}/></td>
                  <td onClick={this.viewChart(item.serverID, item.hostName, [privateIp, publicIp])}>
                    <a href="javascript:;" ><i className="fa fa-area-chart"></i>&nbsp;监控图表</a>
                  </td>
                </tr>
                  )
              })
              }
            </tbody>
          </Table>
        </div>
        <Pagination className={this.props.totalRecord / PAGE_OPTIONS[0] <= 1 ? 'display-none' : ''}
                    total={this.props.totalRecord}
                    current={this.props.pageID}
                    pageSize={this.props.pageSize}
                    onChange={this.changePageID}
                    pageSizeOptions={PAGE_OPTIONS}
                    selectComponentClass={Select}
                    showSizeChanger
                    showTotal={this.showTotal}
                    onShowSizeChange={this.props.changePageSize}
        />
      </div>
    )
  }
})
