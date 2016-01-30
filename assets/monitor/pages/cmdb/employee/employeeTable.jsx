import React from 'react'
import {Table} from 'react-bootstrap'
import Pagination from 'rc-pagination'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    pageChange: React.PropTypes.func.isRequired,
    total:React.PropTypes.number,
    pageID:React.number
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

  changePageSize(pageSize) {
    this.setState({
      pageSize: pageSize
    })
  },

  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-body">
          <Table hover>
            <thead>
            <tr>
              <th className="text_center">姓名</th>
              <th className="text_center">电话</th>
              <th className="text_center">邮箱</th>
              <th className="text_center">部门</th>
              <th className="text_center">小组</th>
            </tr>
            </thead>

            <tbody>
            {
              this.props.data.map((item)=>{
                return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.deptName}</td>
                  <td>{item.teamName}</td>
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
