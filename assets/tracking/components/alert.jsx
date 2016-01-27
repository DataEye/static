import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    content: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {showModal: false}
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  render() {
    return (
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>提示</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h3>{this.props.content}</h3>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close}>取消</Button>
          <Button bsStyle="primary">确定</Button>
        </Modal.Footer>
      </Modal>
    )
  }
})
