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
      pageID: 1,
      pageSize: 10,
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
      this.state.pageID, this.state.pageSize)

    this.props.actions.servermonitorLoadServerList()
  },

  search: function(searchKey) {
    let pageID = 1
    this.setState({
      pageID:pageID,
      pageSize:this.state.pageSize,
      searchKey:searchKey
    })

    this.query(searchKey, pageID, this.state.pageSize)
  },

  clear: function() {
    this.setState(
      {searchKey:''}
    )
  },

  pageChange: function(pageID, pageSize) {
    this.setState({
      pageID:pageID,
      pageSize:pageSize
    })
    this.query(this.state.searchKey, pageID, pageSize)
  },

  query: function(searchKey, pageID, pageSize, orderBy, order) {
    let groupID = this.props.params.groupId
    this.props.actions.servermonitorQueryGroupServer({
      groupID:groupID,
      searchKey:searchKey,
      pageID:pageID,
      pageSize:pageSize,
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
