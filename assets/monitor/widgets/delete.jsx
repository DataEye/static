import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    btntext: React.PropTypes.any,
    title:React.PropTypes.string,
    prompt:React.PropTypes.string,
    delfunc:React.PropTypes.func.isRequired,
    itemId: React.PropTypes.number.isRequired
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

  handleDelete() {
    let id = this.props.itemId
    this.props.delfunc(id)
    this.close()
  },

  render() {
    return (
      <div className="static-modal">
        <a onClick={this.open}>
          {this.props.btntext}
        </a>
        <Modal className="modal-track"
               show={this.state.showModal}
               onHide={this.close} >
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <p>{this.props.prompt}</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close} className="btn-custom btn-small btn-white pull-left">取消</button>
            <button onClick={this.handleDelete} className="btn-custom btn-small btn-blue pull-right">确定</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
