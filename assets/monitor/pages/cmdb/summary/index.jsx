import React, {PropTypes} from 'react'
import Loading from '../../../components/loading.jsx'
import SummaryHead from './summmaryhead.jsx'
import SummaryTable from './summarytable.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  componentWillMount: function() {
    this.props.actions.summaryGetTopData()
    this.props.actions.summaryGetTableData()
  },

  render() {
    return (
      <div className="content">
        <div className="main">
          <div className="content-header clearfix form-horizontal">
          <Loading loading={this.props.states.summary.loading}>
            <SummaryHead data={this.props.states.summary.topdata}/>
            <SummaryTable data={this.props.states.summary.tabledata}/>
          </Loading>
          </div>
        </div>
      </div>
    )
  }
})
