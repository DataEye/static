import React, {PropTypes} from 'react'
import AddUpdateDeviceForm from './addUpdateDeviceForm.jsx'
import Loading from '../../../components/loading.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object
  },

  componentWillMount: function() {
    this.props.actions.deviceInitSelectData()
  },
  render() {
    return (
      <div className="main">
        <Loading loading={this.props.states.device.loadingSelectData}>
          <AddUpdateDeviceForm
            id={this.props.params.id}
            initData={this.props.states.device.initData}
            actions={this.props.actions}
            states={this.props.states}
          />
        </Loading>
      </div>
    )
  }
})
