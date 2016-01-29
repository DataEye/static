import React, {PropTypes} from 'react'
import BasicPage from './page_widgets/basic_page.jsx'
import Search from '../../../widgets/search_bar.jsx'
import AddServer from './addServer.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav: PropTypes.string
  },

  getInitialState() {
    return {
      reloadData: false
    }
  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.states.servermonitor.addServer) return
    const currentAddServerStatus = this.props.states.servermonitor.addServer.status
    const nextAddServerStatus = nextProps.states.servermonitor.addServer.status
    if (currentAddServerStatus !== nextAddServerStatus && nextAddServerStatus === 'error') {
      alert(nextProps.states.servermonitor.addServer.errorInfo)
    }
    this.setState({reloadData: nextProps.states.servermonitor.addServer.status === 'success'})
  },

  render() {
    return (
      <BasicPage actions={this.props.actions}
                 states={this.props.states}
                 params={this.props.params}
                 pageNav={this.props.pageNav}
                 actionName="servermonitorQueryGroupServer"
                 idName="groupID"
                 reloadData={this.state.reloadData}
        >
        <div className="pull-right">
          <AddServer text="添加机器"
                     actions={this.props.actions}
                     states={this.props.states}
                     params={this.props.params}
                     pageNav={this.props.pageNav}
            />
        </div>
      </BasicPage>
    )
  }
})
