import React, {PropTypes} from 'react'
import Loading from 'dejs/lib/loading'
import Error from 'dejs/lib/error'
import NoData from 'dejs/lib/no-data'
import TableComponent from './groupTable.jsx'
import AddGroup from './addGroup.jsx'
import ContentHeader from '../../../widgets/container_header.jsx'
import PageNav from '../../../widgets/page_nav.jsx'
export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    pageNav:PropTypes.string
  },

  getInitialState() {
    return {
      pageID: 1,
      pageSize: 10
    }
  },

  componentDidMount() {
    this.query()
  },

  pageChange: function(pageID, pageSize) {
    this.setState({
      pageID: pageID,
      pageSize: pageSize
    })
    this.props.actions.servermonitorNextPage({
      pageID: pageID,
      pageSize: pageSize
    })
  },

  query: function() {
    this.props.actions.servermonitorQueryGroup({
      pageID: this.state.pageID,
      pageSize: this.state.pageSize
    })
  },

  getComponentByStatus(element, error, isEmpty, done) {
    if (error) return <Error error={error} />

    //<div></div>是由于Loading的children不能为空而加的
    if (isEmpty) {
      return done ? <NoData /> : <div></div>
    }

    return element
  },

  render() {
    let datagrid = (
      <TableComponent
        actions={this.props.actions}
        total={this.props.states.servermonitor.group.totalRecord}
        data={this.props.states.servermonitor.group.currentPageItems}
        pageChange={this.pageChange}
        />
    )
    return (
      <div>
          <ContentHeader>
            <PageNav pageNav={this.props.pageNav}/>
          </ContentHeader>
          <div className="content">
            <div className="main">
              <div className="content-header clearfix form-horizontal">
                <AddGroup text="添加分组" actions={this.props.actions}
                          states={this.props.states}/>
              </div>
              <Loading done={!this.props.states.servermonitor.group.isLoading}>
                {this.getComponentByStatus(datagrid, this.props.states.servermonitor.group.error,
                  this.props.states.servermonitor.group.currentPageItems.length === 0,
                  !this.props.states.servermonitor.group.isLoading)}
              </Loading>
           </div>
        </div>
    </div>
    )
  }
})
