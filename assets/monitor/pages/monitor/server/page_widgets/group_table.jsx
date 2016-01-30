import React from 'react'
import {Table} from 'react-bootstrap'
import Pagination from 'rc-pagination'
import Delete from '../../../../widgets/delete.jsx'

export default React.createClass({
  propTypes: {
    actions: React.PropTypes.object,
    data: React.PropTypes.array.isRequired,
    pageChange: React.PropTypes.func.isRequired,
    total: React.PropTypes.number,
    states: React.PropTypes.object
  },

  getInitialState() {
    return {
      pageID:1,
      pageSize:10
    }
  },

  onPageChange(current) {
    this.setState({
      pageID: current
    })

    this.props.pageChange(
      current,
      this.state.pageSize
    )
  },

  changePageSize(pageSize) {
    this.setState({
      pageSize: pageSize
    })
  },

  handleDelete(id) {
    this.props.actions.servermonitorDeleteGroup({
      groupID:id
    })
  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.states.servermonitor.deleteGroup) return
    const currentDeleteGroupStatus = this.props.states.servermonitor.deleteGroup.status
    const nextDeleteGroupStatus = nextProps.states.servermonitor.deleteGroup.status
    if (currentDeleteGroupStatus !== nextDeleteGroupStatus && nextDeleteGroupStatus === 'success') {
      //要加载左侧菜单所以使用reload
      window.location.reload()
    } else if (currentDeleteGroupStatus !== nextDeleteGroupStatus && nextDeleteGroupStatus === 'error') {
      alert(nextProps.states.servermonitor.deleteGroup.errorInfo)
    }
  },

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-body">
          <Table hover className="text_center">
            <thead>
            <tr>
              <th className="text_center">分组名</th>
              <th className="text_center">操作</th>
            </tr>
            </thead>

            <tbody>
            {
              this.props.data.map((item)=>{
                return (
                  <tr key={item.groupID}>
                    <td>{item.groupName}</td>
                    <td>
                      <Delete btntext={<i className="fa fa-trash-o"></i>} title="删除分组"
                              prompt="确认删除该分组吗?"
                              itemId={item.groupID}
                              delfunc={this.handleDelete}
                      />
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </Table>
        </div>
        {this.props.total / 10 <= 1 ? '' :
          <Pagination total={this.props.total}
                      current={this.state.pageID}
                      pageSize={this.state.pageSize}
                      onChange={this.onPageChange}
                      pageSizeOptions={['10', '20', '50']}
                      onShowSizeChange={this.changePageSize}
            />
        }
      </div>
    )
  }
})
