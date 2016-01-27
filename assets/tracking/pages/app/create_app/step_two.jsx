import React, {PropTypes} from 'react'
import {Input} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    toStepTreeFn: PropTypes.func.isRequired,
    appInfo:PropTypes.object.isRequired,
    appid: PropTypes.string
  },

  render() {
    return (
      <div className="wrapper-body create-app">
        <div className="clearfix">
          <div className={this.props.appInfo.category === 1 ? 'pull-left app-icon' : 'pull-left game-icon'}></div>
          <div className="title">
            <span className="name"><b>{this.props.appInfo.name}</b></span>
            <span>【{this.props.appInfo.typeName}】</span>
          </div>
        </div>
        <hr style={{marginBottom: 30}}/>
        <div className="row">
          <div className="col-md-6">
            <div className="form-horizontal">
              <Input type="text" label="APPID:" value={this.props.appInfo.appid} labelClassName="col-xs-2" wrapperClassName="col-xs-9" disabled />
              <div className="form-group">
                <label className="control-label col-xs-2">下载:</label>
                <div className="col-xs-9">
                  <a href="http://wiki.dataeye.com/tracking.html" target="_blank" className="col-xs-12 btn btn-default">SDK</a>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-offset-2 col-xs-9">
                  查看<a href="http://wiki.dataeye.com/tracking.html" target="_blank">“接入说明”</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          </div>
        </div>
        <hr style={{marginTop: 50}}/>
        <div className="form-group col-md-6">
          <div className="col-xs-offset-2">
            {/* 点击查看报表跳到实时页面 */}
            <a className="btn btn-primary custom-btn-long" href={'#/realtime/' + this.props.appid}>查看报表</a>
          </div>
        </div>
      </div>
    )
  }
})
            // <Button bsStyle="primary" className="custom-btn-long" onClick={this.props.toStepTreeFn}>查看报表</Button>
