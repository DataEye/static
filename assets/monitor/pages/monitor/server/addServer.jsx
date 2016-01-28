import React, {PropTypes} from 'react'
import {Modal} from 'react-bootstrap'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav: PropTypes.string
  },

  addServer() {
    this.props.actions.servermonitorAddServer(
      {
        serverID:this.state.serverId,
        groupID:this.props.params.id
      }
    )
    this.setState({showModal: false})
  },

  getInitialState() {
    return {
      showModal: false
    }
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
    this.props.actions.servermonitorLoadServerList()
  },

  onChange(serverId) {
    this.setState({serverId})
  },

  componentWillReceiveProps(nextProps) {
    if (!!nextProps.pageNav) {
      let groupName = nextProps.pageNav.split('>').pop()
      this.setState({groupName})
    }
  },

  render() {
    return (
      <div className="static-modal">
        <button className="btn-custom btn-large btn-blue" onClick={this.open}>{this.props.text}</button>
        <Modal className="modal-track"
               show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.text}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <div>
                <span>分组名称:</span>
                <span>{this.state.groupName}</span>
              </div>

              <div>
                <span>选择机器:</span>
                <Select name="form-field-name"
                        value={this.state.serverId}
                        options={this.props.states.servermonitor.serverList}
                        onChange={this.onChange}
                        placeholder="选择机器"
                        />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close} className="btn-custom btn-small btn-white pull-left">取消</button>
            <button onClick={this.addServer} className="btn-custom btn-small btn-blue pull-right">确定</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})