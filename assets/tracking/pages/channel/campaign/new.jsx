import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'
import ajax from 'dejs/lib/ajax'
import NewLink from '../../../widgets/new_link.jsx'
import SelectDownloadUrl from './select_download_url.jsx'

export default React.createClass({
  propTypes: {
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
    ajax({
      url: '/createCampaignBefore.do',
      method: 'post',
      data: {uid: window.App.uid, appid: this.props.appid, channelId: this.props.channelId},
      success: (res) => {
        this.setState({
          id: res.content.campaignId,
          trackUrl: res.content.trackUrl,
          postBackLink: res.content.postBackLink
        })
      },
      fail: (err) => {
        console.error(err.toString())
      }
    })
  },

  createCampaign() {
    this.props.actions.channelCreateCampaign({
      uid: window.App.uid,
      appid: this.props.appid,
      campaignId: this.state.id,
      name: this.refs.name.value.trim(),
      channelId: this.props.channelId,
      downloadId: this.state.downloadId,
      trackUrl: this.refs.trackUrl.value.trim(),
      params: this.refs.params.value.trim()
    })
    this.close()
  },

  setDownloadId(val) {
    this.setState({downloadId: val})
  },

  render() {
    return (
      <div className="static-modal">
        <NewLink text={this.props.text} handleClick={this.open}/>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>添加推广活动</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-3 control-label">下载名称</label>
                <div className="col-sm-8">
                  <input ref="name" type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">下载地址</label>
                <div className="col-sm-6">
                  <SelectDownloadUrl
                    states={this.props.states}
                    setDownloadId={this.setDownloadId}
                  />
                </div>
                <div className="col-sm-2" style={{paddingLeft: 0, paddingRight: 0}}>
                  <a className="btn btn-default" href={`#/stores/${this.props.appid}`}>设置地址</a>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">广告活动参数</label>
                <div className="col-sm-8">
                  <input ref="params" type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">推广链接</label>
                <div className="col-sm-8">
                  <input
                    ref="trackUrl"
                    disabled="true"
                    type="textarea"
                    value={this.state.trackUrl}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3 control-label">激活回调</label>
                <div className="col-sm-8">
                  <input
                    ref="postBackLink"
                    disabled="true"
                    type="textarea"
                    value={this.state.postBackLink}
                    className="form-control"
                  />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button
              bsStyle="primary"
              onClick={this.createCampaign}
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
