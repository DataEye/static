import React, {PropTypes} from 'react'
import AddUpdateDeviceForm from './addUpdateDeviceForm.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object
  },

  componentWillMount: function() {
    this.props.actions.deviceInitSelectData()
    let id = this.props.params.id
    id = Number(id)
    if (id >= 0) {
      this.props.actions.deviceGetEditData({
        id:id
      })
    } else {
      this.props.actions.deviceClearEditData()
    }
  },

  render() {
    return (
      <div className="main">
        <AddUpdateDeviceForm
          editData={this.props.states.device.editData}
          id={this.props.params.id}
          initData={this.props.states.device.initData}
          actions={this.props.actions}
          isSaved={this.props.states.isSaved}
        />
      </div>
    )
  }
})
