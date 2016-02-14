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

  createCustom() {
    const name = this.refs.name.getValue().trim()
    const homePage = this.refs.mainUrl.getValue().trim()

    if (!name) {
      alert('名称不能为空！')
      return
    }

    if (!homePage) {
      alert('主站地址不能为空！')
      return
    }

    if (!tools.validateUrl(homePage)) {
      alert('请填写合法的地址！')
      return
    }

    this.props.actions.storeCreateCustomStore({
      uid: window.App.uid,
      name: name,
      homePage: homePage
    })
    this.close()
  },

  render() {
    return (
      <div className="static-modal">
        <a className="new-link" onClick={this.open}>
          <i className="fa fa-plus"></i>
          {this.props.text}
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>新建自定义商店</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input
                ref="name"
                type="text"
                label="商店名称"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-9"
              />
              <Input
                ref="mainUrl"
                type="text"
                label="商店主站地址"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-9"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.createCustom} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
