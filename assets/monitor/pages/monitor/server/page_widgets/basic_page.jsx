import React, {PropTypes} from 'react'
import Loading from 'dejs/lib/loading'
import Error from 'dejs/lib/error'
import NoData from 'dejs/lib/no-data'
import TableComponent from './server_table.jsx'
import PageNav from '../../../../widgets/page_nav.jsx'
import ContentHeader from '../../../../widgets/container_header.jsx'
import ServerInfo from './server_info/index.jsx'
import {DEFAULT_PAGESIZE} from './../../../../helpers/constants.jsx'
import Search from '../../../../widgets/search_bar.jsx'

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
      searchKey: ''
    }
  },

  search(searchKey) {
    this.setState({
      searchKey
    })
    this.postData.searchKey = searchKey
    this.query(this.postData)
  },

  clear() {
    this.setState({
      searchKey: ''
    })
    this.postData.searchKey = ''
    this.query(this.postData)
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
      searchKey: this.state.searchKey
    }

    if (this.props.hasModuleSelect) {
      this.postData.moduleId = this.props.moduleId
    }
    this.postData[this.props.idName] = this.props.params.id
    this.query(this.postData)
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.id !== this.props.params.id) {
      this.refs.searchKey.setState({value: ''})
      this.setState({isChartView: false, searchKey: '', orderBy: null, order: null})
      Object.assign(this.postData, {searchKey: '', orderBy: null, order: null})
      this.postData[this.props.idName] = nextProps.params.id
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

  sortBy(name) {
    if (name === this.state.orderBy) {
      this.setState({order: this.state.order ? 0 : 1})
      this.postData.order = this.state.order ? 0 : 1
    } else {
      this.setState({orderBy: name, order: 1})
      Object.assign(this.postData, {orderBy: name, order: 1})
    }
    this.query(this.postData)
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
          sortBy={this.sortBy}
          />)
      } else {
        dataList = (<div></div>)
      }

      content = (
          <div className="content">
            <div className="main">
              <div className="content-header clearfix form-horizontal">
                {this.props.children}
                <Search search={this.search}
                        clear={this.clear}
                        ref="searchKey"
                  />
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
