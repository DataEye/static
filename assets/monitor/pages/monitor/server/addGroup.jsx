import React, {PropTypes} from 'react'
import {Modal, Input} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  addGroup() {
    let name = this.refs.name.getValue()
    if (!!name) {
      this.props.actions.servermonitorAddGroup(
        {
          groupName: name
        }
      )
      this.setState({showModal: false})
    } else {
      alert('您没有填写名称，无法添加！')
    }
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
  },

  componentWillReceiveProps(nextProps) {
    if (!this.props.states.servermonitor.addGroup) return
    const currentAddGroupStatus = this.props.states.servermonitor.addGroup.status
    const nextAddGroupStatus = nextProps.states.servermonitor.addGroup.status
    if (currentAddGroupStatus !== nextAddGroupStatus && nextAddGroupStatus === 'success') {
      //要加在左侧菜单所以使用reload
      window.location.reload()
    } else if (currentAddGroupStatus !== nextAddGroupStatus && nextAddGroupStatus === 'error') {
      alert(nextProps.states.servermonitor.addGroup.errorInfo)
    }
  },

  render() {
    return (
      <div className="static-modal">
        <button onClick={this.open} className="btn-custom btn-small btn-green">{this.props.text}</button>
        <Modal className="modal-track"
               show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.text}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input ref="name"
                     type="text"
                     label="分组名称 :"
                     value={this.state.name}
                     labelClassName="col-xs-2"
                     wrapperClassName="col-xs-9"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close} className="btn-custom btn-small btn-white pull-left">取消</button>
            <button onClick={this.addGroup} className="btn-custom btn-small btn-blue pull-right">确定</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
