import React, {PropTypes} from 'react'
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu'

const menu = [
    {key: '1-1', href: '#/realtime/'},
    {key: '1-2', href: '#/core/'},
    {key: '1-3', href: '#/summary/'},
    {key: '2-1', href: '#/stores/'},
    {key: '2-2', href: '#/channels/'}]

export default React.createClass({
  propTypes: {
    appid: PropTypes.string.isRequired,
  },

  getInitialState() {
    return {
      openKeys: [],
      selectedKeys:[]
    }
  },

  initOpenKey() {
    const hash = location.hash
    for (let i = 0, length = menu.length; i < length; i++) {
      if (hash.indexOf(menu[i].href) > -1) {
        return menu[i].key
      }
    }
  },

  init() {
    const activeKey = this.initOpenKey()
    const openKey = activeKey.slice('-')[0] || ''
    this.setState({
      openKeys: [openKey],
      selectedKeys: [activeKey]
    })
  },

  handleHashChange() {
    this.init()
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },

  componentDidMount() {
    this.init()
    window.onhashchange = this.handleHashChange
  },

  onClick(info) {
    this.setState({
      openKeys: info.keyPath.slice(1),
    })
  },

  onOpen(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
    })
  },

  onClose(info) {
    this.onOpen(info)
  },

  getMenu() {
    const index =
      (<span>
        <span className="fa arrow pull-right sidebar-arrow"/>
        <i className="fa fa-bar-chart"></i>
        指标分析
      </span>)

    const management =
      (<span>
        <span className="fa arrow pull-right sidebar-arrow"/>
        <i className="fa fa-list"></i>
        APP投放管理
      </span>)

    return (
      <Menu
        onClick={this.onClick}
        mode="inline"
        onOpen={this.onOpen}
        onClose={this.onClose}
        openKeys={this.state.openKeys}
        selectedKeys={this.state.selectedKeys}
      >
        <SubMenu key="1" title={index}>
          <MenuItem key="1-1">
            <a href={'#/realtime/' + this.props.appid}>实时统计</a>
          </MenuItem>
          <MenuItem key="1-2">
            <a href={'#/core/' + this.props.appid}>核心指标转化</a>
          </MenuItem>
          <MenuItem key="1-3">
            <a href={'#/summary/' + this.props.appid}>概览数据</a>
          </MenuItem>
        </SubMenu>
        <SubMenu key="2" title={management}>
          <MenuItem key="2-1">
            <a href={'#/stores/' + this.props.appid}>管理下载商店</a>
          </MenuItem>
          <MenuItem key="2-2">
            <a href={'#/channels/' + this.props.appid}>管理广告活动</a>
          </MenuItem>
        </SubMenu>
      </Menu>
    )
  },

  render() {
    return (
      <div style={{width: 200}}>{this.getMenu()}</div>
    )
  },
})
