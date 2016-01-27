import React, {PropTypes} from 'react'
import AppHandle from './app_handle.jsx'
import Submit from '../../../components/submit_button.jsx'

export default React.createClass({
  propTypes: {
    createFn: PropTypes.func.isRequired,
    importData: PropTypes.object
  },

  createApp(param, typeName) {
    this.props.createFn(param, typeName)
  },

  submit() {
    let component = this.refs.handler
    component.commitSubmit.call(component)
  },

  render() {
    return (
      <div className="wrapper-body">
        <AppHandle handleType="create" handleFn={this.createApp} ref="handler" importData={this.props.importData} />
        <hr style={{marginTop: 50}}/>
        <div className="form-horizontal  de-narrow-form">
          <div className="form-group" style={{textAlign: 'center'}}>
            <div className="btn-group">
              <Submit text="下一步" submit={this.submit}/>
              <a href="" className="custom-btn-short btn btn-default">取消</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
