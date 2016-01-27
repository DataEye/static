import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    storeId: PropTypes.number.isRequired,
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
      showModal: false,
      name: this.props.name,
      link: this.props.link
    }
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  handleNameChange() {
    this.setState({name: this.refs.name.getValue()})
  },

  handleLinkChange() {
    this.setState({link: this.refs.link.getValue()})
  },

  editDownloadUrl() {
    this.props.actions.storeEditDownloadUrl({
      id: this.props.id,
      appid: this.props.appid,
      storeId: this.props.storeId,
      name: this.state.name,
      link: this.state.link,
      uid: window.App.uid
    })
    this.close()
  },

  render() {
    return (
      <div className="static-modal pull-left">
        <a onClick={this.open}>
          {this.props.text}
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>修改下载链接</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input
                ref="name"
                type="text"
                label="下载名称"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-10"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <Input
                ref="link"
                type="text"
                label="下载链接"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-10"
                value={this.state.link}
                onChange={this.handleLinkChange}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.editDownloadUrl} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
