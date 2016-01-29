import React, {PropTypes} from 'react'
import _ from 'lodash'
import Menu, {SubMenu, Item as MenuItem} from 'rc-menu'
import {MENU} from '../helpers/constants.jsx'
import ajax from '../utils/ajax.jsx'
import velocity from 'velocity-animate'


const animation = {
  enter(node, done) {
    let ok = false

    function complete() {
      if (!ok) {
        ok = 1
        done()
      }
    }

    node.style.display = 'none'

    velocity(node, 'slideDown', {
      duration: 300,
      complete: complete
    })
    return {
      stop() {
        velocity(node, 'finish')
        // velocity complete is async
        complete()
      }
    }
  },

  appear() {
    return this.enter.apply(this, arguments)
  },

  leave(node, done) {
    let ok = false

    function complete() {
      if (!ok) {
        ok = 1
        done()
      }
    }

    node.style.display = 'block'
    velocity(node, 'slideUp', {
      duration: 300,
      complete: complete
    })
    return {
      stop() {
        velocity(node, 'finish')
        // velocity complete is async
        complete()
      }
    }
  }
}

export default React.createClass({
  propTypes: {
    selectedTopItem: PropTypes.string.isRequired,
    getsideMenuNav: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      openKeys: [],
      selectedKeys: [],
      activeKey: '',
      menu: {
        title: '',
        name: '',
        items: [
        ]
      }
    }
  },

  getNav(value) {
    //顶部菜单选中的部分
    let menu = _.clone(this.state.menu.items)
    let sideNav
    menu.forEach((item) => {
      if (item.subs) {
        let obj = item.subs.filter((subitem) => {return subitem.name === value})[0]
        if (obj) {
          sideNav = item.name + '>' + obj.name
        }
      } else if (item.name === value) {
        sideNav = item.name
      }
      if (sideNav) return
    })

    this.props.getsideMenuNav(sideNav)
  },

  setActiveKeyFromUrl(menu, sideItemTitle, sideItemId) {
    let activeKey
    let openKeys = []
    if (menu && menu.items.length > 0) {
      menu.items.forEach((item) => {
        if (item.subs) {
          item.subs.forEach((subItem) => {
            if (subItem.title === sideItemTitle) {
              if (!subItem.id) {
                activeKey = subItem.name
                openKeys.push(item.name)
              } else if (subItem.id && (subItem.id === Number(sideItemId))) {
                activeKey = subItem.name
                openKeys.push(item.name)
              }
            }
          })
        } else if (item.title === sideItemTitle) {
          activeKey = item.name
        }
      })
      this.setState({openKeys: openKeys, activeKey, selectedKeys: [activeKey]})
      this.getNav(activeKey)
    }
  },

  setDefaultActiveKey(menu) {
    if (menu && menu.items.length) {
      let defaultOpenKeys = menu.items[0].subs ? [(menu.items[0].name)] : []
      let item = menu.items[0].subs ? menu.items[0].subs[0] : menu.items[0]
      let defaultSelectedKeys = item ? [item.name] : []
      let defaultActiveKey = item ? item.name : ''
      let id = item ? item.id : null
      let hash = item ? menu.title + '/' + item.title + (typeof id === 'number' && !!id ? '/' + id : '') : ''

      this.setState({openKeys: defaultOpenKeys, selectedKeys: defaultSelectedKeys, activeKey: defaultActiveKey})

      this.getNav(defaultActiveKey)

      location.hash = '#/' + hash
    }
  },

  setActiveKey(menu) {
    let str = location.hash.slice(2)
    str = str.split('?')[0]
    let routeArr = str.split('/')

    if (!!routeArr[1]) {
      this.setActiveKeyFromUrl(menu, routeArr[1], routeArr[2])
    } else {
      this.setDefaultActiveKey(menu)
    }
  },

  getLeftMenu(topItem) {
    if (topItem === 'server' || topItem === 'site') {
      ajax({
        method: 'post',
        url: '/getOmpMenu.do',
        data: {itemId: topItem},
        success: (msg) => {
          if (this.isMounted()) {
            this.setState({
              menu: msg.content
            })
            this.setActiveKey(msg.content)
          }
        },
        fail: (msg) => {
        }
      })
    } else {
      this.setState({menu: MENU[topItem]})
      this.setActiveKey(MENU[topItem])
    }
  },

  componentDidMount() {
    this.getLeftMenu(this.props.selectedTopItem)
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedTopItem !== nextProps.selectedTopItem) {
      if (this.props.selectedTopItem) {
        location.hash = ''
      }
      this.getLeftMenu(nextProps.selectedTopItem)
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

  onClose(info) {
    this.onOpen(info)
  },

  render() {
    let items = this.state.menu ? this.state.menu.items.map((item)=> {
      let subItems = item.subs ?
          item.subs.map((subItem) => {
            return (<MenuItem key={subItem.name}>
              <a href={`#/${this.state.menu.title}/${subItem.title}` + ((typeof subItem.id === 'number') && (subItem.id !== 0) ? `/${subItem.id}` : '')}>{subItem.name}</a>
            </MenuItem>)
          }) : ''

      return item.subs ?
          (<SubMenu title={(<a href="javascript:;"><span className={'icon' + ' ' + 'icon-' + item.title}></span><span>{item.name}</span><i className="fa arrow pull-right"></i></a>)} key={item.name}>
            {subItems}
          </SubMenu>) :
          <MenuItem key={item.name}>
            <a href={`#/${this.state.menu.title}/${item.title}` + ((typeof item.id === 'number') && (item.id !== 0) ? `/${item.id}` : '')}>
              <span className={'icon' + ' ' + 'icon-' + item.title}></span>
              {item.name}
            </a>
          </MenuItem>
    }) : ''

    let menu = this.state.menu ? (
      <Menu mode="inline"
            onClick={this.onClick}
            onOpen={this.onOpen}
            onClose={this.onClose}
            openKeys={this.state.openKeys}
            selectedKeys={this.state.selectedKeys}
            activeKey={this.state.activeKey}
            openAnimation={animation}
          >
        {items}
      </Menu>
    ) : ''
    return (
      <div className="">
        <div className="bar-title">
          <span className={'icon' + (this.state.menu ? ' ' + 'icon-' + this.state.menu.title : '')}></span>
          {this.state.menu ? this.state.menu.name : ''}
        </div>
        {menu}
      </div>
    )
  }
})
