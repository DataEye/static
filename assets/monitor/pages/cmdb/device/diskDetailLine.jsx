import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import NewLink from '../../../widgets/new_link.jsx'

export default React.createClass({
  propTypes: {
    addDisk:PropTypes.func
  },

  addDisk() {
    let diskDir = this.refs.diskDir.getValue()
    let diskType = this.refs.diskType.getValue()
    let diskVolue = this.refs.diskVolue.getValue()

    this.props.addDisk(diskDir, diskType, diskVolue)
    this.setState({showModal: false})
  },

  getInitialState() {
    return {
      showModal: false,
      isp:1
    }
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  render() {
    return (
      <div className="static-modal">
        <NewLink text="" handleClick={this.open}/>
        <Modal className="modal-track"
               show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input ref="diskDir" type="text" bsSize="small"
                     label="磁盘目录"
                     labelClassName="col-xs-2"
                     wrapperClassName="col-xs-8"/>

              <Input ref="diskType" type="text" bsSize="small"
                     label="磁盘类型"
                     labelClassName="col-xs-2"
                     wrapperClassName="col-xs-8"/>

              <Input ref="diskVolue" type="text"
                     addonAfter="G"
                     bsSize="small" label="磁盘大小"
                     labelClassName="col-xs-2"
                     wrapperClassName="col-xs-8"/>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button
              bsStyle="primary"
              onClick={this.addDisk}
              className="btn-track">
              确定
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
