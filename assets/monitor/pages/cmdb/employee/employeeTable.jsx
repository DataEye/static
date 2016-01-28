import React from 'react'
import {Table} from 'react-bootstrap'
import Pagination from 'rc-pagination'

export default React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired,
    pageChange: React.PropTypes.func.isRequired,
    total:React.PropTypes.number,
  },

  getInitialState() {
    return {
      pageid:1,
      pagesize:10
    }
  },

  onPageChange(current) {
    this.props.pageChange(
      current,
      this.state.pagesize
    )


    this.setState({
      pageid: current
    })
  },

  changePageSize(pagesize) {
    this.setState({
      pagesize: pagesize
    })
  },

  render() {
    console.log('current' + this.state.pageid)
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
                    current={this.state.pageid}
                    pageSize={this.state.pagesize}
                    onChange={this.onPageChange}
                    pageSizeOptions={['10', '20', '50']}
                    onShowSizeChange={this.changePageSize}
        />
      </div>

    )
  }
})
