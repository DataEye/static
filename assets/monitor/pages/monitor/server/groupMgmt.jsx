import React, {PropTypes} from 'react'
import Loading from '../../../components/loading.jsx'
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
      pageid: 1,
      pagesize: 10
    }
  },

  componentWillMount() {
    this.query()
  },

  pageChange: function(pageid, pagesize) {
    this.setState({
      pageid: pageid,
      pagesize: pagesize
    })
    this.props.actions.servermonitorNextPage({
      pageid: pageid,
      pagesize: pagesize
    })
  },

  query: function() {
    this.props.actions.servermonitorQueryGroup({
      pageid: this.state.pageid,
      pagesize: this.state.pagesize
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
                <AddGroup text="添加分组" actions={this.props.actions}
                          states={this.props.states}/>
              </div>
              <Loading loading={this.props.states.servermonitor.group.loading}>
                <TableComponent
                  actions={this.props.actions}
                  total={this.props.states.servermonitor.group.totalRecord}
                  data={this.props.states.servermonitor.group.currentPageItems}
                  pageChange={this.pageChange}
                />
              </Loading>
           </div>
        </div>
    </div>
    )
  }
})
