import React, {PropTypes} from 'react'
import {Table} from 'react-bootstrap'
import DownloadUrl from './download_url/download_url.jsx'
import NewDownloadUrl from './download_url/new.jsx'
import DeleteStore from './delete.jsx'
import Th from '../../widgets/th_center.jsx'
import Title from '../../widgets/text_with_baloon.jsx'
import Pagination from '../../widgets/pagination.jsx'

export default React.createClass({
  propTypes: {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    downloadUrls: PropTypes.array.isRequired,
    appid: PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object,
    totalRecord: PropTypes.number,
    type: PropTypes.number.isRequired
  },

  getDefaultProps() {
    return {
      downloadUrls: []
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
    this.props.actions.storeGetDownloadUrls({
      uid: window.App.uid,
      appid: this.props.appid,
      storeId: this.props.id,
      pageID: pageID,
      pageSize: this.state.pageSize
    })
  },

  render() {
    return (
      <div className="panel panel-track">
        <div className="panel-heading">
          <Title title={this.props.name} showSymbol={this.props.type} />
          <DeleteStore
            id={this.props.id}
            appid={this.props.appid}
            actions={this.props.actions}
          />
        </div>
        <div className="panel-body">
          <Table hover>
            <thead>
              <tr>
                <Th>命名</Th>
                <Th>下载链接</Th>
                <Th>操作</Th>
              </tr>
            </thead>
            <tbody>
              {this.props.downloadUrls.map((url) => {
                return (
                  <DownloadUrl
                    key={url.id}
                    id={url.id}
                    name={url.name}
                    link={url.link}
                    appid={this.props.appid}
                    storeId={this.props.id}
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
          <NewDownloadUrl
            text="添加下载链接"
            appid={this.props.appid}
            storeId={this.props.id}
            actions={this.props.actions}
            states={this.props.states}
          />
        </div>
      </div>
    )
  }
})
