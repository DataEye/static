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

  handleSubmit() {
    let handler = this.refs.addUpdateDevice
    handler.saveDevice.call(handler)
  },

  save(param) {
    let id = Number(this.props.params.id)
    if (id >= 0) {
      this.props.actions.deviceUpdate(param)
    } else {
      this.props.actions.deviceAdd(param)
    }
  },
  cancel() {
    window.location.hash = '/configuration/devices'
  },

  render() {
    return (
      <div className="content clearfix">
        <Loading loading={this.props.states.device.loadingSelectData}>
          <AddUpdateDeviceForm
            ref="addUpdateDevice"
            id={this.props.params.id}
            initData={this.props.states.device.initData}
            actions={this.props.actions}
            states={this.props.states}
            commitSubmit={this.save}
          />
        </Loading>
        <div className="form-horizontal col-md-6">
          <div className="form-group">
            <div className="col-xs-offset-3 col-xs-7">
              <button className="btn-custom btn-small btn-white pull-left"
                      onClick={this.cancel}>确定</button>
              <button className="btn-custom btn-small btn-blue pull-left"
                      onClick ={this.handleSubmit}>取消</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
