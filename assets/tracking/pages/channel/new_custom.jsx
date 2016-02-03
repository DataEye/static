import React from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import * as tools from '../../helpers/tools.js'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    actions: React.PropTypes.object,
    states: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      text: 'New',
    }
  },

  getInitialState() {
    return {
      showModal: false,
    }
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  createCustomChannel() {
    const name = this.refs.name.getValue().trim()
    const cbUrl = this.refs.cbUrl.getValue().trim()

    if (!name) {
      alert('名称不能为空！')
      return
    }

    if (!tools.validateUrl(cbUrl)) {
      alert('请填写合法的地址！')
      return
    }

    this.props.actions.channelCreateCustomChannel({
      uid: window.App.uid,
      name: name,
      cbUrl: cbUrl
    })
    this.close()
  },

  render() {
    return (
      <div className="static-modal">
        <a className="new-lick" onClick={this.open}>
          <i className="fa fa-plus"></i>
          {this.props.text}
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>新建自定义广告网络</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input
                ref="name"
                type="text"
                label="广告网络名称"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-8"
              />
              <Input
                ref="cbUrl"
                type="text"
                label="激活回调地址"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-8"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.createCustomChannel} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
