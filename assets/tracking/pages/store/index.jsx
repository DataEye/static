import React, {PropTypes} from 'react'
import Store from './store.jsx'
import NewButton from '../../widgets/new_button.jsx'
import ContainerHeader from '../../widgets/container_header.jsx'
import Pagination from '../../widgets/pagination.jsx'

export default React.createClass({
  propTypes: {
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object
  },

  getInitialState() {
    return {
      currentPageID: 1,
      pageSize: 10
    }
  },

  componentDidMount: function() {
    this.props.actions.storeGetStores({
      uid: window.App.uid,
      appid: this.props.params.appid,
      downloadUrlsInitSize: 10
    })
  },

  onPageChange(pageID) {
    this.setState({currentPageID: pageID})
    this.props.actions.storeGetStores({
      uid: window.App.uid,
      appid: this.props.params.appid,
      pageID: pageID,
      pageSize: this.state.pageSize
    })
  },

  render() {
    return (
      <div>
        <ContainerHeader>
          <NewButton href={'#/stores/add/' + this.props.params.appid} text="添加下载商店" />
        </ContainerHeader>
        {this.props.states.store.items.map((store) => {
          return (
            <Store
              key={store.id}
              id={store.id}
              name={store.name}
              downloadUrls={store.downloadUrls}
              type={store.type}
              appid={this.props.params.appid}
              actions={this.props.actions}
              states={this.props.states}
              totalRecord={store.totalRecord}
            />
          )
        })}
        <Pagination
          total={this.props.states.store.totalRecord}
          current={this.state.currentPageID}
          pageSize={this.state.pageSize}
          onChange={this.onPageChange}
        />
      </div>
    )
  }
})
