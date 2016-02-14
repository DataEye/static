import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import SelectDownloadUrl from './select_download_url.jsx'

export default React.createClass({
  propTypes: {
    id: PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    // downloadId: React.PropTypes.number.isRequired,
    trackUrl: React.PropTypes.string.isRequired,
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
      showModal: false,
      id: this.props.id,
      name: this.props.name,
      // downloadId: this.props.downloadId,
      trackUrl: this.props.trackUrl,
      channelId: this.props.channelId
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

  handleParamsChange() {
    this.setState({params: this.refs.params.getValue()})
  },

  editCampaign() {
    if (!this.state.name) {
      alert('请填写名称！')
      return
    }

    if (!this.state.downloadId) {
      alert('请选择下载地址！')
      return
    }

    this.props.actions.channelEditCampaign({
      uid: App.uid,
      appid: this.props.appid,
      campaignId: this.props.id,
      name: this.state.name,
      downloadId: this.state.downloadId,
      params: this.state.params,
      channelId: this.props.channelId
    })
    this.close()
  },

  setDownloadId(val) {
    this.setState({downloadId: val})
  },

  render() {
    return (
      <div className="static-modal pull-left">
        <a onClick={this.open}>
          {this.props.text}
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>修改推广活动</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input
                ref="name"
                type="text"
                label="名称"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-8"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
              <Input
                label="下载地址"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-8"
              >
                <SelectDownloadUrl
                  states={this.props.states}
                  setDownloadId={this.setDownloadId}
                />
              </Input>
              <Input
                ref="params"
                type="text"
                label="广告活动参数"
                labelClassName="col-xs-2"
                wrapperClassName="col-xs-8"
                onChange={this.handleParamsChange}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.editCampaign} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
