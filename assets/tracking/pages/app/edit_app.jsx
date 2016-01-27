import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import AppHandle from './create_app/app_handle.jsx'

export default React.createClass({
  propTypes: {
    showEditModal: React.PropTypes.bool.isRequired,
    appInfo: React.PropTypes.object.isRequired,
    editApp: React.PropTypes.func.isRequired,
    closeEditModal: React.PropTypes.func.isRequired
  },

  submit() {
    let component = this.refs.handler
    component.commitSubmit.call(component)
  },

  editApp(param) {
    this.props.editApp(param)
  },

  closeEdit() {
    this.props.closeEditModal()
  },

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <Modal show={this.props.showEditModal} onHide={this.closeEdit} bsSize="lg">
          <Modal.Header closeButton>
            <Modal.Title>编辑APP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppHandle handleType="edit" appInfo={this.props.appInfo} handleFn={this.editApp} ref="handler" />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeEdit}>取消</Button>
            <Button bsStyle="primary" onClick={this.submit}>确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
