import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    appInfo:PropTypes.object.isRequired,
    activatedAmount: PropTypes.number.isRequired
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
        <div>
          <div className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-xs-2">APPID:</label>
              <div className="col-xs-4">
                <input type="text"className="form-control" value={this.props.appInfo.appid} disabled />
              </div>
              <span className="col-xs-6 attention">提示：请不要忘记在你的代码里添加想要统计的自定义事件</span>
            </div>
            <div className="form-group">
              <label className="control-label col-xs-2">下载:</label>
              <div className="col-xs-4">
                <a href="http://wiki.dataeye.com/tracking.html" target="_blank" className="col-xs-12 btn btn-default">SDK</a>
              </div>
              <span className="col-xs-6 attention">查看<a href="http://wiki.dataeye.com/tracking.html" target="_blank">“接入说明”</a></span>
            </div>
          </div>
        </div>
        <hr style={{marginTop: 30}} />
        <div className="form-horizontal">
          <div className="form-group">
            <label className="control-label col-xs-2">调试集成：</label>
            <div className="col-xs-4">
              <div className="integration">
                <i style={{display: this.props.activatedAmount ? 'block' : 'none'}}></i>
                <p>设备激活</p>
                <p style={{display: this.props.activatedAmount ? 'none' : 'block'}}>---</p>
                <p className="activatedAmount" style={{display: this.props.activatedAmount ? 'block' : 'none'}}>{this.props.activatedAmount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a style={{display: this.props.activatedAmount ? 'none' : 'inline-block'}}
            href="javascript:;" className="custom-btn-long custom-btn-gray" >查看报表</a>
          <a style={{display: this.props.activatedAmount ? 'inline-block' : 'none'}}
             href={'#/realtime/' + this.props.appInfo.appid} className="custom-btn-long btn btn-primary" >查看报表</a>
        </div>
      </div>
    )
  }
})
