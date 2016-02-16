import React, {PropTypes} from 'react'
import ajax from 'dejs/lib/ajax'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    appid: PropTypes.string
  },

  getInitialState() {
    return {
      appList: []
    }
  },

  componentDidMount() {
    this.getAppIDList()
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.appid !== nextProps.appid) {
      this.getAppIDList()
    }
  },

  getAppOptions(appList) {
    let options = []
    for (let i = 0, length = appList.length; i < length; i++) {
      options.push({
        value: appList[i].appid || '',
        label: appList[i].name || ''
      })
    }
    return options
  },

  getAppIDList() {
    ajax({
      method: 'POST',
      url:'/getAppNames.do',
      data: {uid: App.uid},
      success: (msg) => {
        this.setState({appList: this.getAppOptions(msg.content)})
      }
    })
  },

  handleAppChange(newValue) {
    let hash = location.hash.slice(1).split('/')
    const previousAppId = hash[2].split('?')[0]
    if (newValue && previousAppId !== newValue) {
      location.hash = '/' + hash[1] + '/' + newValue
      window.location.reload()
    }
  },

  render() {
    const appidSwitcher = (this.state.appList.length > 0 && this.props.appid) ? (
      <Select
        className="switch-app"
        // labelKey="name"
        // valueKey="appid"
        name="form-field-name"
        value={this.props.appid}
        options={this.state.appList}
        onChange={this.handleAppChange}
        clearable={false}
        searchable={false}
      />
    ) : ''

    const toHomeBtn = (
      <a href="javascript:;" className={this.props.appid ? 'my-app' : 'my-app has-no-select' }>我的APP</a>
    )

    return (
      <header id="header" className="clearfix">
        <div className="logo"><a href=""></a></div>
        <span className="separation-line"></span>
        <div className="containter">
          <div id="appid-switcher">
            {toHomeBtn}
            <span className="arrow" style={{display: this.props.appid ? 'inline-block' : 'none'}}></span>
            {appidSwitcher}
          </div>
          <div className="top-tool">
            <a href="http://wiki.dataeye.com/tracking.html" target="_blank">
              <i className="fa fa-book"></i>
              &nbsp;接入文档
            </a>
            <a href="javascript:;" id="userCenter">
              <i className="fa fa-user"></i>
              &nbsp;{App.userName}
            </a>
            <a href="http://www.dataeye.com/ptlogin/user/logout.do">
              <i className="fa fa-power-off"></i>
              &nbsp;注销
            </a>
          </div>
        </div>
      </header>
    )
  }
})
