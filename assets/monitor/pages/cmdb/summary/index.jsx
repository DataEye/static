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
      <div className="">
        <div>
          <div className="summary-title">设备资源</div>
          <div className="summary-data">
            <SummaryHead data={this.props.states.summary.topdata}/>
          </div>
        </div>
        <div className="content">
          <div className="main">
            <div className="content-header clearfix form-horizontal">
              <Loading loading={this.props.states.summary.loading}>
                <SummaryTable data={this.props.states.summary.tabledata}/>
              </Loading>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
