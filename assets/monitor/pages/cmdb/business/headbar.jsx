import React from 'react'
import Search from '../../../widgets/search_bar.jsx'
import AddBusiness from './addbusiness.jsx'

export default React.createClass({
  propTypes: {
    queryBusiness: React.PropTypes.func.isRequired,
    actions:React.PropTypes.object,
    states:React.PropTypes.object
  },

  getInitialState: function() {
    return {
      searchKey:'',
    }
  },

  handleRequest: function(searchKey) {
    this.setState({
      searchKey:searchKey
    })

    this.props.queryBusiness(
      searchKey
    )
  },

  clearSearch: function() {
    this.setState(
      {searchKey:''}
    )
  },

  render() {
    return (
      <div className="content-header clearfix form-horizontal">
        <Search search={this.handleRequest}
                clear={this.clearSearch}
                ref="searchKey"
                className="pull-left"
                value={this.state.searchKey}/>
        <div className="pull-right">
          <AddBusiness text="添加业务" actions={this.props.actions}
                       employeeList={this.props.states.business.employeeList}/>
        </div>
    </div>
    )
  }
})
