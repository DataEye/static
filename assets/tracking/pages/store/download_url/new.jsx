import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import NewLink from '../../../widgets/new_link.jsx'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
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
    return {showModal: false}
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  createDownloadUrl() {
    const name = this.refs.name.getValue().trim()
    const link = this.refs.link.getValue().trim()

    if (name && link) {
      this.props.actions.storeCreateDownloadUrl({
        appid: this.props.appid,
        storeId: this.props.storeId,
        name: name,
        link: link,
        uid: window.App.uid
      })
      this.close()
    } else if (!name) {
      alert('名称不能为空！')
    } else if (!link) {
      alert('地址不能为空！')
    }
  },

  render() {
    return (
      <div className="static-modal">
        <NewLink text={this.props.text} handleClick={this.open} />
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>添加下载链接</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input
                ref="name"
                type="text"
                label="下载名称"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-10"
              />
              <Input
                ref="link"
                type="text"
                label="下载链接"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-10"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button
              bsStyle="primary"
              onClick={this.createDownloadUrl}
              className="btn-track"
            >
            确定
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
