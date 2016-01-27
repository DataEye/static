import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    id: PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired,
    appid: PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  getDefaultProps() {
    return {
      text: 'New'
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

  delCampaign() {
    this.props.actions.channelDelCampaign({
      uid: window.App.uid,
      appid: this.props.appid,
      campaignId: this.props.id,
      channelId: this.props.channelId
    })
    this.close()
  },

  render() {
    return (
      <div className="static-modal">
        <a onClick={this.open}>
          {this.props.text}
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>删除推广活动</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <p>确认删除?</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.delCampaign} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
