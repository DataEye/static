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
      pageid: 1,
      pagesize: 10,
      searchType: 0,
      searchkey: ''
    }
  },

  componentWillMount: function() {
    this.props.actions.deviceQuery({
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
      searchType:searchType,
      searchKey:searchKey
    })
  },

  pageChange(pageid, pagesize) {
    this.props.actions.deviceQuery({
      searchType:this.state.searchType,
      searchKey:this.state.searchKey,
      pageid:pageid,
      pagesize: pagesize
    })
  },

  reload() {
    this.props.actions.deviceQuery({
      searchType:this.state.searchType,
      searchKey:this.state.searchKey,
      pageid:this.state.pageid,
      pagesize:this.state.pagesize,
    })
  },

  render() {
    return (
        <div id="deviceConfig" className="main">
          <HeadBar queryDevice={this.searchDevice}/>
          <hr/>
          <Loading loading={this.props.states.device.loading}>
            <TableComponent
              total={this.props.states.device.totalRecord}
              data={this.props.states.device.items}
              pageChange={this.pageChange}
              actions={this.props.actions}
              isDeleted={this.props.states.device.isDeleted}
              reload={this.reload}
            />
          </Loading>
        </div>
    )
  }
})
