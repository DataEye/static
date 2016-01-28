import React, {PropTypes} from 'react'
import Loading from 'dejs/lib/loading'
import Error from 'dejs/lib/error'
import NoData from 'dejs/lib/no-data'
import TableComponent from './serverTable.jsx'
import PageNav from '../../../../widgets/page_nav.jsx'
import ContentHeader from '../../../../widgets/container_header.jsx'
import ServerInfo from './server_info/index.jsx'
import {DEFAULT_PAGESIZE} from './../../../../helpers/constants.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav: PropTypes.string,
    actionName: PropTypes.string,
    idName: PropTypes.string,
    searchKey: PropTypes.string,
    moduleId: PropTypes.number,
    hasModuleSelect: PropTypes.bool,
    reloadData: PropTypes.bool
  },

  getDefaultProps() {
    return {
      moduleId: -1
    }
  },

  getInitialState() {
    return {
      isChartView: false,
      serverID: null,
      hostName: '',
      ip: [],
      pageID: 1,
      pageSize: DEFAULT_PAGESIZE,
      searchkey: ''
    }
  },

  query: function(postData) {
    this.props.actions[this.props.actionName](postData)
  },

  changePageID(pageID) {
    Object.assign(this.postData, {pageID})
    this.query(this.postData)
    this.setState({pageID})
  },

  changePageSize(pageID, pageSize) {
    Object.assign(this.postData, {pageID, pageSize})
    this.query(this.postData)
    this.setState({pageID, pageSize})
  },

  componentDidMount() {
    this.postData = {
      pageID: this.state.pageID,
      pageSize: this.state.pageSize,
      searchKey: this.props.searchKey
    }

    if (this.props.hasModuleSelect) {
      this.postData.moduleId = this.props.moduleId
    }
    this.postData[this.props.idName] = this.props.params.id
    this.query(this.postData)
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.setState({isChartView: false})
      this.postData[this.props.idName] = nextProps.params.id
      this.query(this.postData)
    }

    if (this.props.searchKey !== nextProps.searchKey) {
      Object.assign(this.postData, {searchKey: nextProps.searchKey})
      this.query(this.postData)
    }

    if (this.props.hasModuleSelect && this.props.moduleId !== nextProps.moduleId) {
      Object.assign(this.postData, {moduleId: nextProps.moduleId})
      this.query(this.postData)
    }

    if (this.props.reloadData !== nextProps.reloadData && nextProps.reloadData) {
      this.query(this.postData)
    }
  },

  viewChart(serverID, hostName, ip) {
    this.setState({
      isChartView: true,
      serverID,
      hostName,
      ip
    })
  },

  goBack() {
    this.setState({isChartView: false})
  },

  render() {
    let header, dataList, content, body
    if (!this.state.isChartView) {
      header = (
          <ContentHeader>
            <PageNav pageNav={this.props.pageNav} />
          </ContentHeader>
      )

      if (!this.props.states.servermonitor.server.isLoading && this.props.states.servermonitor.server.error) {
        dataList = <Error />
      } else if (!this.props.states.servermonitor.server.isLoading && this.props.states.servermonitor.server.items.length <= 0) {
        dataList = <NoData/>
      } else if (!this.props.states.servermonitor.server.isLoading) {
        dataList = (<TableComponent
          totalRecord={this.props.states.servermonitor.server.totalRecord}
          pageID={this.state.pageID}
          pageSize={this.state.pageSize}
          data={this.props.states.servermonitor.server.items}
          changePageID={this.changePageID}
          changePageSize={this.changePageSize}
          viewChart={this.viewChart}
          />)
      } else {
        dataList = (<div></div>)
      }

      content = (
          <div className="content">
            <div className="main">
              <div className="content-header clearfix form-horizontal">
                {this.props.children}
              </div>
              <Loading done={!this.props.states.servermonitor.server.isLoading}>
                {dataList}
              </Loading>
            </div>
          </div>
      )
      body = (
        <div>
          {header}
          {content}
        </div>
      )
    } else {
      body = (<ServerInfo actions={this.props.actions}
                  states={this.props.states}
                  goBack={this.goBack}
                  serverID={this.state.serverID}
                  hostName={this.state.hostName}
                  ip={this.state.ip}
              />)
    }
    return (
      <div>
        {body}
      </div>
    )
  }
})
