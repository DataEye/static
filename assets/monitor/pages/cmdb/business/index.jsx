import React, {PropTypes} from 'react'
import HeadBar from './headbar.jsx'
import BusinessTable from './businesstable.jsx'
import Loading from '../../../components/loading.jsx'

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  getInitialState() {
    return {
      pageid: 1,
      pagesize: 10,
      searchKey: ''
    }
  },

  getBusiness(searchKey) {

  },

  handlePageChange(pageid, pagesize) {
    this.props.actions.businessNextPage(pageid, pagesize)
  },

  componentWillMount: function() {
    this.props.actions.businessGetBusinessList({
      pageSize:this.state.pagesize
    })

    this.props.actions.businessGetEmployeeSelectData()
  },

  render() {
    return (
      <div id="deviceConfig" className="main">
        <HeadBar queryBusiness={this.getBusiness}
          actions={this.props.actions}
                 states={this.props.states}
        />
        <Loading loading={this.props.states.business.loading}>
        <BusinessTable data={this.props.states.business.currentPageItems}
                       pageChange={this.handlePageChange}
                       actions={this.props.actions}
                       states={this.props.states}
                       total={this.props.states.business.totalRecord}
        />
        </Loading>
      </div>
    )
  }
})
