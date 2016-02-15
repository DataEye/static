import React from 'react'
import {Table} from 'react-bootstrap'
import Pagination from 'rc-pagination'
import DeleteDevice from '../../../widgets/delete.jsx'
export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    pageChange: React.PropTypes.func.isRequired,
    reload:React.PropTypes.func,
    actions:React.PropTypes.object,
    total:React.PropTypes.number,
    pageID:React.PropTypes.number
  },

  getInitialState() {
    return {
      pageSize:10
    }
  },

  onPageChange(current) {
    this.props.pageChange(
      current,
      this.state.pageSize
    )
  },

  delDevice(devId) {
    this.props.actions.deviceDel({
      deviceId:devId
    })
    this.props.reload()
  },

  render() {
    return (
        <div className="panel panel-info">
          <div className="panel-body">
            <Table hover className="text_center">
              <thead>
              <tr>
                <th className="text_center">固定资产号</th>
                <th className="text_center">内网IP</th>
                <th className="text_center">外网IP</th>
                <th className="text_center">主机名</th>
                <th className="text_center">机房</th>
                <th className="text_center">业务</th>
                <th className="text_center">模块</th>
                <th className="text_center">操作</th>
              </tr>
              </thead>

              <tbody>
              {
                this.props.data.map((item)=>{
                  let privateIp = ''
                  let publicIp = ''
                    //React.createElement('<td>', null, null)
                  item.deviceIPList.map((deviceIp)=>{
                    if (deviceIp.type === 0) {
                      privateIp = deviceIp.ip
                    } else {
                      publicIp = publicIp + deviceIp.ip + '(' + deviceIp.ispName + ')  '
                      //publicIp = <td><p> {deviceIp.ip} ({deviceIp.ispName} )</p></td>
                    }
                  })

                 // let td = React.createElement('<td>', null, null)

                  return (
                    <tr key={item.devId}>
                      <td>{item.devId}</td>
                      <td>{privateIp}</td>
                      <td>{publicIp}</td>
                      <td>{item.hostName}</td>
                      <td>{item.idcName}</td>
                      <td>{item.busiName}</td>
                      <td>{item.moduleName}</td>
                      <td>
                        <a href={'#/configuration/devices/add_update/' + item.id}><i className="fa fa-edit"></i></a>
                        <DeleteDevice itemId={item.id} btntext={<i className="fa fa-trash-o"></i>}
                                title="删除设备"
                                prompt="确认删除设备吗？"
                                delfunc={this.delDevice}
                        />
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </Table>
          </div>
          <Pagination total={this.props.total}
                      current={this.props.pageID}
                      pageSize={this.state.pageSize}
                      onChange={this.onPageChange}
                      pageSizeOptions={['10', '20', '50']}
                      onShowSizeChange={this.changePageSize}
          />
        </div>
    )
  }
})
