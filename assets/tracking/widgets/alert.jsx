import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    info: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    states: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      title: '提示',
      info: 'Failed!'
    }
  },

  getInitialState() {
    return {showModal: false}
  },

  close() {
    this.setState({showModal: false})
    this.props.states.channel.delCampaignFailed = false
  },

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>{this.props.info}</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.close}>确定</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})
