import React, {PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import Search from '../../widgets/search_bar.jsx'
import ajax from 'dejs/lib/ajax'
import _ from 'lodash'

export default React.createClass({
  propTypes: {
    showImportModal: PropTypes.bool.isRequired,
    closeImportApp: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    states: PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      data: []
    }
  },
  componentDidMount() {
    this.getData()
  },
  componentWillReceiveProps(nextProps) {
    let currentimportData = nextProps.states.app.importData
    let lastimportData = this.props.states.app.importData
    if (currentimportData !== lastimportData) {
      window.location.hash = '/createApp'
    }
  },
  getData() {
    ajax({
      url: '/getAppsUnbind.do',
      data: {uid: App.uid},
      success: (msg) => {
        this.setState({data: msg.content, sourceData: msg.content})
      }
    })
  },
  search(key) {
    let data = _.clone(this.state.sourceData, true)
    let searchedData = data.filter((item) => {
      return _.includes(item.name, key)
    })
    this.setState({data: searchedData})
  },
  clear() {
    this.setState({data: this.state.sourceData})
  },
  importApp(item, e) {
    this.props.actions.appImp(item)
  },
  render() {
    let list = this.state.data.map((item) => {
      return (
        <a
          href="javascript:;"
          key={item.appid}
          style={{display: item.hidden ? 'none' : 'inline-block'}}
          onClick={this.importApp.bind(this, item)}
        >
          {item.name}
        </a>
      )
    })
    return (
      <Modal show={this.props.showImportModal} onHide={this.props.closeImportApp} bsSize="lg">
        <Modal.Header closeButton>
          <Modal.Title>从其他平台导入APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="clearfix">
            <div className="clearfix">
              <Search search={this.search} clear={this.clear} type="client" className="pull-right" />
            </div>
            <hr/>
            <div className="import-list">
              {list}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
})
