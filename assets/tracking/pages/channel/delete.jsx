import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    appid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  getDefaultProps() {
    return {
      text: 'Delete'
    }
  },

  getInitialState() {
    return {
      showModal: false
    }
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  delChannel() {
    this.props.actions.channelDelChannel({
      uid: window.App.uid,
      appid: this.props.appid,
      channelId: this.props.id,
      name: this.props.name
    })
    this.close()
  },

  render() {
    return (
      <div className="static-modal delete-icon">
        <a onClick={this.open} className="cicon icon-blue">
           <i className="fa fa-trash"></i>
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>删除广告网络</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal text-center">
              <p>确认删除?</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.delChannel} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
