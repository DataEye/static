import React, {PropTypes} from 'react'
import Channel from './channel.jsx'
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
    this.props.actions.channelGetChannels({
      uid: window.App.uid,
      appid: this.props.params.appid,
      downloadUrlsInitSize: 10
    })

    this.props.actions.channelGetDownloadUrlNames({
      uid: window.App.uid,
      appid: this.props.params.appid
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
          <NewButton href={'#/channels/add/' + this.props.params.appid} text="添加广告网络"/>
        </ContainerHeader>
        {this.props.states.channel.items.map((channel) => {
          return (
            <Channel
              key={channel.channelId}
              id={channel.channelId}
              appid={this.props.params.appid}
              campaigns={channel.campaigns}
              name={channel.name}
              type={channel.type}
              actions={this.props.actions}
              states={this.props.states}
              totalRecord={channel.totalRecord}
            />
          )
        })}
        <Pagination
          total={this.props.states.channel.totalRecord}
          current={this.state.currentPageID}
          pageSize={this.state.pageSize}
          onChange={this.onPageChange}
        />
      </div>
    )
  }
})
