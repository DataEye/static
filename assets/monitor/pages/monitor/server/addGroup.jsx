import React, {PropTypes} from 'react'
import {Modal, Input} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  addGroup() {
    let name = this.refs.name.getValue()
    this.props.actions.servermonitorAddGroup(
      {
        groupName:name
      }
    )
    this.setState({showModal: false})
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

  render() {
    return (
      <div className="static-modal">
        <button onClick={this.open} className="btn-custom btn-small btn-green">{this.props.text}</button>
        <Modal className="modal-track"
               show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.text}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input ref="name"
                     type="text"
                     label="分组名称"
                     labelClassName="col-xs-2"
                     wrapperClassName="col-xs-8"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close} className="btn-custom btn-small btn-white pull-left">取消</button>
            <button onClick={this.addGroup} className="btn-custom btn-small btn-blue pull-right">确定</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
