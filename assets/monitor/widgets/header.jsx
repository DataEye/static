import React from 'react'
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu'
import {TOP_MENU, MINUS_ONE} from '../helpers/constants.jsx'

export default React.createClass({
  propTypes: {
    changeMenuSelectedItem: React.PropTypes.func.isRequired,
    hideLeftMenu: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      openKeys: [],
      selectedKeys: [],
      activeKey: ''
    }
  },

  componentWillMount() {
    let str = location.hash.slice(2)
    str = str.split('?')[0]
    let routeArr = str.split('/')

    if (!!routeArr[0]) {
      this.setActiveKeyFromUrl(routeArr[0])
    } else {
      this.getTopMenu()
    }
  },

  getNav(value) {
    //顶部菜单选中的部分
    let topNav, topSelectedItem
    TOP_MENU.forEach((item) => {
      if (item.subs) {
        let obj = item.subs.filter((subitem) => {return subitem.name === value})[0]
        if (obj) {
          topSelectedItem = obj.title
          topNav = item.name + '>' + obj.name
        }
      } else if (item.name === value) {
        topSelectedItem = item.title
        topNav = item.name
      }

      if (topSelectedItem) return
    })
    this.props.changeMenuSelectedItem(topSelectedItem, topNav)
  },

  getTopMenu() {
    if (TOP_MENU.length > 0) {
      let item = TOP_MENU[0].subs ? TOP_MENU[0].subs[0] : TOP_MENU[0]
      let defaultSelectedKeys = item ? [item.name] : []
      let defaultActiveKey = item ? item.name : ''
      this.setState({selectedKeys: defaultSelectedKeys, activeKey: defaultActiveKey})
      this.getNav(defaultActiveKey)
    }
  },

  setActiveKeyFromUrl(topItem) {
    let activeKey
    if (TOP_MENU.length > 0) {
      TOP_MENU.forEach((item) => {
        if (item.title === topItem) {
          activeKey = item.name
        } else if (item.subs) {
          item.subs.forEach((subItem) => {
            if (subItem.title === topItem) {
              activeKey = subItem.name
              return
            }
          })
        }
      })
      this.setState({activeKey, selectedKeys: [activeKey]})
      this.getNav(activeKey)
    }
  },

  onClick(info) {
    this.setState({
      openKeys: info.keyPath.slice(1),
      selectedKeys: [info.key],
      activeKey: info.key
    })
    this.getNav(info.key)
  },

  onOpen(info) {
    this.setState({
      openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
    })
  },

  render() {
    let menuItems = (
      TOP_MENU.map((item) => {
        let subItems, subNames
        if (item.subs) {
          subItems = item.subs.map((subItem) => {
            return <MenuItem key={subItem.name}>{subItem.name}</MenuItem>
          })
          subNames = item.subs.map((subItem) => {
            return subItem.name
          })
        }

        return item.subs ?
          <SubMenu title={(<div className={subNames.indexOf(this.state.activeKey) !== MINUS_ONE ? 'first-level-menu-select' : ''}>
                            {item.name}&nbsp;&nbsp;
                            <i className="fa fa-caret-down"></i>
                            </div>)} key={item.name}>
            {subItems}
          </SubMenu> :
          <MenuItem key={item.name}>{item.name}</MenuItem>
      })
    )

    let topMenu = (
      <Menu mode="horizontal"
            onClick={this.onClick}
            onOpen={this.onOpen}
            selectedKeys={this.state.selectedKeys}
            activeKey={this.state.activeKey}
            openAnimation="slide-up"
            closeSubMenuOnMouseEnter={false}
        >
        {menuItems}
      </Menu>
    )

    return (
      <div id="header" className="clearfix">
        <div className="logo"><span></span></div>
        <div className="control-left-menu" onClick={this.props.hideLeftMenu} ></div>
        <div className="nav">
          {topMenu}
        </div>
        <div className="top-tool">
            <a href="javascript:;" className="user">
            <i className="fa fa-user"></i>
            &nbsp;{App.userName}
          </a>
          <a href="/logout.do" className="logout">
            <i className="fa fa-power-off"></i>
            &nbsp;注销
          </a>
        </div>
      </div>
    )
  }
})
