/**
 * 数据中心，入口页面
 */
import React, {PropTypes} from 'react'
import Select from 'react-select'
import Search from '../../widgets/search_bar.jsx'
import Pagination from '../../widgets/pagination.jsx'
import AppCell from './app_cell.jsx'
import ContentHeader from './content_header.jsx'
import ajax from 'dejs/lib/ajax'
import {APP_TYPE_OPTIONS} from '../../helpers/constants.jsx'
import Loading from 'dejs/lib/loading'
import EditApp from './edit_app.jsx'
import _ from 'lodash'

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object.isRequired,
    states: PropTypes.object.isRequired,
    params: PropTypes.object
  },

  getInitialState() {
    return {
      showEdit: false,
      appInfo: {},
      appAmount: 0,
      gameAmount: 0,
      data:[],
      pageID: 1,
      pageSize: 9,
      queryType: 1,
      searchKey: ''
    }
  },

  postData: {
    uid: App.uid
  },

  getAppData(postData) {
    this.setState({
      done: false,
      error: null
    })
    ajax({
      method: 'post',
      url: '/getApps.do',
      data: postData,
      success: (msg) => {
        if (this.isMounted()) {
          this.setState({
            appAmount: msg.content.appAmount,
            gameAmount: msg.content.gameAmount,
            totalRecord: msg.content.totalRecord,
            data: msg.content.content,
            done: true,
            error: null,
            isEmpty: msg.content.content.length === 0
          })
        }
      },
      fail: (msg) => {
        this.setState({
          done: true,
          error: msg
        })
      }
    })
  },

  componentDidMount() {
    this.getAppData(this.postData)
  },

  /**
   * props和states的变化都会触发componentWillReceiveProps
   * 所以这里需要判断当前的变化是不是在执行删除动作
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.states.app.delState === 'success') {
      this.setState({
        data: this.state.data.filter((item) => {
          return item.appid !== nextProps.states.app.delAppID
        })
      })
    }

    if (nextProps.states.app.editState === 'success') {
      let editedData = nextProps.states.app.edit
      let data = _.clone(this.state.data, true)
      let thisItem = _.filter(data, 'appid', nextProps.states.app.edit.appid)[0]
      _.assign(thisItem, {
        name: editedData.name,
        category: editedData.category,
        type: editedData.type,
        // currency: editedData.currency,
        platform: editedData.platform,
        gameEngine: editedData.gameEngine
      })
      this.setState({
        showEdit: false,
        data: data
      })
    }
  },

  search(searchKey) {
    this.getAppData(_.assign({}, this.postData, {searchKey: searchKey}))
    this.setState({searchKey: searchKey})
  },

  onPageChange(pageID) {
    this.setState({pageID: pageID})
    this.getAppData(_.assign({}, this.postData, {pageID: pageID}))
  },

  queryTypeChange(val) {
    this.setState({queryType: val})

    let postData = _.assign({}, this.postData, {queryType: val, pageID: 1})
    this.getAppData(postData)
  },

  delApp(appid) {
    this.props.actions.appDel({uid: App.uid, appid: appid})
  },

  showEditModalFn(appInfo) {
    this.setState({showEdit: true, appInfo: appInfo})
  },

  closeEditModal() {
    this.setState({showEdit: false})
  },

  editApp(param) {
    this.props.actions.appEdit(_.assign({uid: App.uid, appid: this.state.appInfo.appid}, param))
  },

  render() {
    _.assign(this.postData, {
      pageID: this.state.pageID,
      pageSize: this.state.pageSize,
      queryType: this.state.queryType,
      searchKey: this.state.searchKey
    })

    let appShow = this.state.data.map((item) => {
      return (
        <AppCell item={item} key={item.appid} delFn={this.delApp} showEditModalFn={this.showEditModalFn}/>
      )
    })
    let emptyTip = (
      <div className="content">
        <div className="add-app text-center">
          <div className="circle">
            <i className="fa fa-plus"></i>
          </div>
          <div>请添加APP</div>
        </div>
      </div>
    )
    let appCenter = (
      <div id="appCenter" className="main">
        <ContentHeader states={this.props.states} actions={this.props.actions}>
          <div className="game-type-choice">
            <Select
              name="form-field-name"
              value={this.state.queryType}
              options={APP_TYPE_OPTIONS}
              onChange={this.queryTypeChange}
              clearable={false}
              searchable={false}
              />
          </div>
          <span>游戏：{this.state.gameAmount}</span>
          <span>APP：{this.state.appAmount}</span>
          <Search search={this.search} className="pull-right"/>
        </ContentHeader>
        <hr/>
        <Loading done={this.state.done} error={this.state.error}
          emptyTip={emptyTip} isEmpty={this.state.isEmpty}>
          {appShow}
          <Pagination
            total={this.state.totalRecord}
            current={this.state.pageID}
            pageSize={this.state.pageSize}
            onChange={this.onPageChange}
          />
        </Loading>
        {
          this.state.showEdit && <EditApp
            appInfo={this.state.appInfo}
            showEditModal={this.state.showEdit}
            editApp={this.editApp}
            closeEditModal={this.closeEditModal}
          />
        }
      </div>
    )

    return appCenter
  }
})
