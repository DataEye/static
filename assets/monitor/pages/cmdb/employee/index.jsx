import React, {PropTypes} from 'react'
import Loading from '../../../components/loading.jsx'
import Search from '../../../widgets/search_bar.jsx'
import EmployeeTable from './employeeTable.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
  },

  getInitialState() {
    return {
      pageID: 1,
      pageSize: 10,
      searchkey: ''
    }
  },

  componentWillMount: function() {
    this.props.actions.employeeQuery({
      searchKey:this.state.searchKey
    })
  },

  handleRequest(searchKey) {
    this.setState({
      searchKey:searchKey
    })

    this.props.actions.employeeQuery({
      searchKey:searchKey
    })
  },

  pageChange(pageID, pageSize) {
    this.setState({
      pageID:pageID,
      pageSize:pageSize
    })

    this.props.actions.employeeQuery({
      searchKey:this.state.searchKey,
      pageID:pageID,
      pageSize: pageSize
    })
  },

  clear() {
    this.setState({
      searchKey:''
    })
  },

  render() {
    return (
      <div id="deviceConfig" className="main">
        <div className="content-header clearfix form-horizontal">
          <Search search={this.handleRequest}
                  clear={this.clear}
                  ref="searchKey"
                  className="pull-left"
                  value={this.state.searchKey}/>
        </div>
        <hr/>
        <Loading loading={this.props.states.employee.loading}>
          <EmployeeTable
            total={this.props.states.employee.totalRecord}
            data={this.props.states.employee.items}
            pageChange={this.pageChange} />
        </Loading>
      </div>

    )
  }
})
