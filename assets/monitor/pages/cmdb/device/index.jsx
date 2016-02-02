import React, {PropTypes} from 'react'
import Loading from '../../../components/loading.jsx'
import HeadBar from './headbar.jsx'
import TableComponent from './TableComponent.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
  },

  getInitialState() {
    return {
      pageID: 1,
      pageSize: 10,
      searchType: 0,
      searchkey: ''
    }
  },

  componentWillMount: function() {
    this.props.actions.deviceQuery({
      pageID:1,
      searchType:0,
      searchKey:''
    })
  },

  searchDevice(searchType, searchKey) {
    this.setState({
      searchType:searchType,
      searchKey:searchKey
    })

    this.props.actions.deviceQuery({
      pageID:1,
      searchType:searchType,
      searchKey:searchKey
    })
  },

  pageChange(pageID, pageSize) {
    this.setState({
      pageID:pageID,
      pageSize:pageSize
    })

    this.props.actions.deviceQuery({
      searchType:this.state.searchType,
      searchKey:this.state.searchKey,
      pageID:pageID,
      pageSize: pageSize
    })
  },

  reload() {
    this.props.actions.deviceQuery({
      searchType:this.state.searchType,
      searchKey:this.state.searchKey,
      pageID:this.state.pageID,
      pageSize:this.state.pageSize,
    })
  },

  render() {
    return (
        <div className="content">
          <HeadBar queryDevice={this.searchDevice}/>
          <Loading loading={this.props.states.device.loading}>
            <TableComponent
              total={this.props.states.device.totalRecord}
              data={this.props.states.device.items}
              pageChange={this.pageChange}
              actions={this.props.actions}
              reload={this.reload}
              pageID={this.props.states.device.currentPage}
            />
          </Loading>
        </div>
    )
  }
})
