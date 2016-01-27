import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'
import ImportApp from './import_app.jsx'

export default React.createClass({
  propTypes: {
    children: PropTypes.any,
    actions: PropTypes.object.isRequired,
    states: PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      showAddAppModal: false,
      showImportModal: false
    }
  },

  showAddApp() {
    this.setState({showAddAppModal: true})
  },

  closeAddApp() {
    this.setState({showAddAppModal: false})
  },

  addApp() {
    let showImportModal = false
    switch (this.state.value) {
    case 'import':
      showImportModal = true
      break
    case 'create':
      window.location.hash = '/createApp'
      break
    default:
      alert('您还没有选择')
      return
    }
    this.setState({showAddAppModal: false, value: '', showImportModal: showImportModal})
  },

  handleChange(event) {
    this.setState({value: event.target.value})
  },

  closeImportApp() {
    this.setState({showImportModal: false})
  },

  render() {
    return (
      <div className="content-header clearfix">
        <a href="javascript:;" className="btn btn-sky-blue add-app-btn" onClick={this.showAddApp}>
          <i className="fa fa-plus"></i>&nbsp;<span>添加APP</span>
        </a>
        <Modal show={this.state.showAddAppModal} onHide={this.closeAddApp} bsSize="small">
          <Modal.Header closeButton>
            <Modal.Title>添加APP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <label className="form-control">
                <input type="radio" name="addAPP" value="import" onChange={this.handleChange}></input>从其他平台导入APP
              </label>
              <label className="form-control">
                <input type="radio" name="addAPP" value="create" onChange={this.handleChange}></input>重新创建APP
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeAddApp}>取消</Button>
            <Button bsStyle="primary" onClick={this.addApp}>确定</Button>
          </Modal.Footer>
        </Modal>
        {this.props.children}
        <ImportApp
          showImportModal={this.state.showImportModal}
          closeImportApp={this.closeImportApp}
          states={this.props.states}
          actions={this.props.actions}
        />
      </div>
    )
  }
})
