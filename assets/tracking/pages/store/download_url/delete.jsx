import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    storeId: PropTypes.number.isRequired,
    appid: PropTypes.string.isRequired,
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

  delDownloadUrl() {
    this.props.actions.storeDelDownloadUrl({
      id: this.props.id,
      appid: this.props.appid,
      uid: window.App.uid,
      storeId: this.props.storeId
    })
    this.close()
  },

  render() {
    return (
      <div className="static-modal">
        <a onClick={this.open}>
          {this.props.text}
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close} >
          <Modal.Header closeButton>
            <Modal.Title>删除下载链接</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <p>确认删除?</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.delDownloadUrl} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
