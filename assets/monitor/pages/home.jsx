/**
 * 数据中心，入口页面
 */
import React, {PropTypes} from 'react'
import Header from '../widgets/header.jsx'
import SideMenu from '../widgets/sidebar.jsx'
import Summary from './cmdb/summary/index.jsx'

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object.isRequired,
    states: PropTypes.object.isRequired,
    params: PropTypes.object
  },

  getInitialState() {
    return {
      selectedTopItem: '',
      pageNav: ''
    }
  },

  changeTopMenuItem(topSelectedItem, topNav) {
    this.setState({selectedTopItem: topSelectedItem, topNav})
  },

  getsideMenuNav(sideNav) {
    this.setState({pageNav: this.state.topNav + '>' + sideNav})
  },

  hideLeftMenu() {
    this.setState({leftHidden: !this.state.leftHidden})
  },

  render() {
    let summary = <Summary actions={this.props.actions} states={this.props.states}/>

    // 作为入口页面接收redux所有的actions，不然子组件无法找到
    const body = !this.props.children ? summary : React.cloneElement(this.props.children, {
      actions: this.props.actions,
      states: this.props.states,
      params: this.props.params,
      pageNav: this.state.pageNav
    })

    return (
      <div className={this.state.leftHidden ? 'left-hidden' : ''} >
        <Header changeMenuSelectedItem={this.changeTopMenuItem}
                hideLeftMenu={this.hideLeftMenu} />
        <div className="sidebar">
          <SideMenu selectedTopItem={this.state.selectedTopItem}
                    getsideMenuNav={this.getsideMenuNav} />
        </div>
        <div className="page-wrapper">
          <div className="main-wrapper">
            <div id="main-container">
              {body}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
