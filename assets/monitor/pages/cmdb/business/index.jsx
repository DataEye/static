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
      pageID: 1,
      pageSize: 10,
      searchKey: ''
    }
  },

  getBusiness(searchKey) {

  },

  handlePageChange(pageID, pageSize) {
    this.props.actions.businessNextPage(
      {
        pageID:pageID,
        pageSize:pageSize
      })
  },

  componentWillMount: function() {
    this.props.actions.businessGetBusinessList({
      pageSize:this.state.pageSize
    })

    this.props.actions.businessGetEmployeeSelectData()
  },

  render() {
    return (
      <div id="deviceConfig" className="content clearfix">
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
