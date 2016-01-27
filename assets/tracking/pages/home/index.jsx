/**
 * 数据中心，入口页面
 */
import React, {PropTypes} from 'react'
import Header from '../../widgets/header.jsx'
import Footer from '../../widgets/footer.jsx'
import SideMenu from '../../widgets/sidebar.jsx'
import AppCenter from '../app/index.jsx'

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object.isRequired,
    states: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  },

  render() {
    // 作为入口页面接收redux所有的actions，不然子组件无法找到
    const appCenter = <AppCenter {...this.props}/>

    const body = !this.props.children ? appCenter : React.cloneElement(this.props.children, {
      actions: this.props.actions,
      states: this.props.states,
      params: this.props.params
    })

    const hideSideBar = !this.props.params.appid

    return (
      <div>
        <Header appid={this.props.params.appid} />
        <div className="page-wrapper">
          <div className="sidebar" style={{display: !hideSideBar ? 'block' : 'none'}}>
            {this.props.params.appid && <SideMenu appid={this.props.params.appid}/>}
          </div>
          <div className={!hideSideBar ? 'main-wrapper' : 'none'}>
            <div className="container-fluid main-container">
              {body}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})
