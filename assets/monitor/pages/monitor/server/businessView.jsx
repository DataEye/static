import React, {PropTypes} from 'react'
import Loading from '../../../components/loading.jsx'
import Select from 'react-select'
import Search from '../../../widgets/search_bar.jsx'
import PageNav from '../../../widgets/page_nav.jsx'
import TableComponent from './page_widgets/serverTable.jsx'
import ContentHeader from '../../../widgets/container_header.jsx'

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
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
      moduleId: '-1'
    }
  },

  componentWillMount() {
    let busiId = this.props.params.busiId
    this.props.actions.servermonitorGetModule({
      busiId: busiId
    })
    this.query(this.state.searchKey, this.state.pageID,
      this.state.pageSize, this.state.moduleId)
  },

  search: function(searchKey) {
    let pageID = 1
    this.setState({
      pageID: pageID,
      searchKey: searchKey
    })

    this.query(searchKey, pageID, this.state.pageSize,
      this.state.moduleId)
  },

  clear: function() {
    this.setState(
      {searchKey: ''}
    )
  },

  pageChange: function(pageID, pageSize) {
    this.setState({
      pageID: pageID,
      pageSize: pageSize
    })
    this.query(this.state.searchKey, pageID, pageSize, this.state.moduleId)
  },

  query: function(searchKey, pageID, pageSize, moduleId, orderBy, order) {
    let busiId = this.props.params.busiId
    this.props.actions.servermonitorQueryBusiServer({
      busiId: busiId,
      searchKey: searchKey,
      pageID: pageID,
      pageSize: pageSize,
      orderBy: orderBy,
      order: order,
      moduleId: moduleId
    })
  },

  selectModule: function(value) {
    this.setState({moduleId:value})

    this.query(this.state.searchKey, this.state.pageID,
      this.state.pageSize, value)
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
                  <Select name="form-field-name"
                          value={this.state.moduleId}
                          options={this.props.states.servermonitor.moduleList}
                          onChange={this.selectModule}
                          clearable={false}
                          searchable={false}/>
                <Search search={this.search}
                        clear={this.clear}
                        ref="searchKey"
                        className="pull-left"
                        value={this.state.searchKey}/>
              </div>
              <Loading loading={this.props.states.servermonitor.server.loading}>
                <TableComponent
                  total={this.props.states.servermonitor.server.totalRecord}
                  data={this.props.states.servermonitor.server.items}
                  pageChange={this.pageChange}
                />
              </Loading>
            </div>
          </div>
      </div>
    )
  }
})
