import React, {PropTypes} from 'react'
import Loading from '../../../components/loading.jsx'
import Search from '../../../widgets/search_bar.jsx'
import TableComponent from './page_widgets/serverTable.jsx'
import AddServer from './addServer.jsx'
import PageNav from '../../../widgets/page_nav.jsx'
import ContentHeader from '../../../widgets/container_header.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav:PropTypes.string
  },

  getInitialState() {
    return {
      pageid: 1,
      pagesize: 10,
      searchKey: '',
      groupName:''
    }
  },

  componentWillMount() {
    let pageNav = this.props.pageNav

    let names = pageNav.split('>')
    let groupName = names[ names.length - 1]

    console.log('pageName:' + pageNav + ' names:' + names + ' groupName:' + groupName)
    this.setState({
      groupName:groupName
    })

    this.query(this.state.searchKey,
      this.state.pageid, this.state.pagesize)

    this.props.actions.servermonitorLoadServerList()
  },

  search: function(searchKey) {
    let pageid = 1
    this.setState({
      pageid:pageid,
      pagesize:this.state.pagesize,
      searchKey:searchKey
    })

    this.query(searchKey, pageid, this.state.pagesize)
  },

  clear: function() {
    this.setState(
      {searchKey:''}
    )
  },

  pageChange: function(pageid, pagesize) {
    this.setState({
      pageid:pageid,
      pagesize:pagesize
    })
    this.query(this.state.searchKey, pageid, pagesize)
  },

  query: function(searchKey, pageid, pagesize, orderBy, order) {
    let groupID = this.props.params.groupId
    this.props.actions.servermonitorQueryGroupServer({
      groupID:groupID,
      searchKey:searchKey,
      pageid:pageid,
      pagesize:pagesize,
      orderBy:orderBy,
      order:order
    })
  },

  render() {
    return (
      <div>
        <ContentHeader>
          <PageNav pageNav={this.props.pageNav}/>
        </ContentHeader>
        <div className="content">
            <div className="main">
              <div className="content-header clearfix form-horizontal">
                  <Search search={this.search}
                          clear={this.clear}
                          ref="searchKey"
                          value={this.state.searchKey} />

                  <AddServer text="添加机器"
                             actions={this.props.actions}
                             groupId={this.props.params.groupId}
                             groupName={this.state.groupName}
                             serverList={this.props.states.servermonitor.serverList}/>

              </div>
              <Loading loading={this.props.states.servermonitor.server.loading}>
                <TableComponent
                  total={this.props.states.servermonitor.server.totalRecord}
                  data={this.props.states.servermonitor.server.items}
                  pageChange={this.pageChange}/>
              </Loading>
           </div>
          </div>
        </div>
    )
  }
})
