import React, {PropTypes} from 'react'
import {Table} from 'react-bootstrap'
import Campaign from './campaign/campaign.jsx'
import NewCampaign from './campaign/new.jsx'
import Th from '../../widgets/th_center.jsx'
import Pagination from '../../widgets/pagination.jsx'
import DeleteChannel from './delete.jsx'
import Title from '../../widgets/text_with_baloon.jsx'

export default React.createClass({
  propTypes: {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    appid: PropTypes.string.isRequired,
    campaigns: PropTypes.array.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object,
    totalRecord: PropTypes.number,
    type: PropTypes.number.isRequired
  },

  getDefaultProps() {
    return {
      campaigns: []
    }
  },

  getInitialState() {
    return {
      currentPageID: 1,
      pageSize: 10,
    }
  },

  onPageChange(pageID) {
    this.setState({currentPageID: pageID})
    this.props.actions.channelGetCampaigns({
      uid: window.App.uid,
      appid: this.props.appid,
      channelId: this.props.id,
      pageID: pageID,
      pageSize: this.state.pageSize
    })
  },

  render() {
    return (
      <div className="panel panel-track">
        <div className="panel-heading">
          <Title title={this.props.name} showSymbol={this.props.type} />
          <DeleteChannel
            id={this.props.id}
            appid={this.props.appid}
            actions={this.props.actions}
            name={this.props.name}
          />
        </div>
        <div className="panel-body">
          <Table hover>
            <thead>
              <tr>
                <Th>名称</Th>
                <Th>下载地址</Th>
                <Th>推广链接</Th>
                <Th>操作</Th>
              </tr>
            </thead>
            <tbody>
              {this.props.campaigns.map((campaign) => {
                return (
                  <Campaign
                    key={campaign.campaignId}
                    campaignId={campaign.campaignId}
                    name={campaign.name}
                    downloadUrl={campaign.downloadUrl}
                    trackUrl={campaign.trackUrl}
                    appid={this.props.appid}
                    channelId={this.props.id}
                    actions={this.props.actions}
                    states={this.props.states}
                  />
                )
              })}
            </tbody>
          </Table>
        </div>
        <div className="panel-footer">
          <Pagination
            total={this.props.totalRecord}
            current={this.state.currentPageID}
            pageSize={this.state.pageSize}
            onChange={this.onPageChange}
          />
          <NewCampaign
            text="添加广告活动"
            appid={this.props.appid}
            channelId={this.props.id}
            actions={this.props.actions}
            states={this.props.states}
          />
        </div>
      </div>
    )
  }
})
