import React from 'react'
import {Table} from 'react-bootstrap'
import Pagination from 'rc-pagination'
import ModuleManagement from './modulemgmt.jsx'
import Delete from '../../../widgets/delete.jsx'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    pageChange: React.PropTypes.func.isRequired,
    actions:React.PropTypes.object,
    states:React.PropTypes.object,
    total:React.PropTypes.number
  },

  getInitialState() {
    return {
      pageid:1,
      pagesize:10
    }
  },

  onPageChange(current) {
    this.setState({
      pageid: current
    })

    this.props.pageChange(
      current,
      this.state.pagesize
    )
  },

  handleDelete(id) {
    this.props.actions.businessDeleteBusiness({
      busiId:id
    })
  },

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-body">
          <Table hover className="text_center">
            <thead>
            <tr>
              <th className="text_center">业务名称</th>
              <th className="text_center">模块数</th>
              <th className="text_center">运维人</th>
              <th className="text_center">操作</th>
            </tr>
            </thead>

            <tbody>
            {

              //<ViewModlue text="查看"
              //            name={item.name}
              //            omPerson={item.omPerson}
              //            module={item.moduleList}
              //            actions={this.props.actions}
              //            states={this.props.states}/>
              this.props.data.map((item)=>{
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.moduleNum}</td>
                    <td>{item.omPersonName}</td>
                    <td>
                     <Delete btntext="删除" title="删除业务"
                             prompt="确认删除该业务吗?"
                             itemId={item.id}
                             delfunc={this.handleDelete}
                     />
                      <ModuleManagement
                        text="模块管理"
                        data={item.moduleList}
                        busiId={item.id}
                        actions={this.props.actions}
                        states={this.props.states}/>
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
        </div>
        <Pagination total={this.props.total}
                    current={this.state.pageid}
                    pageSize={this.state.pagesize}
                    onChange={this.onPageChange}
        />
      </div>
    )
  }
})
