import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import NewLink from '../../../widgets/new_link.jsx'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    ispList: PropTypes.array,
    addPublicIp:PropTypes.func
  },

  addPublicIp() {
    let ip = this.refs.ip.getValue()
    let ispid = this.state.isp

    const index = this.props.ispList.findIndex((element) => {
      return element.value === ispid
    })


    let ispName = this.props.ispList[index].label

    this.props.addPublicIp(ip, ispid, ispName)
    this.setState({showModal: false})
  },

  getInitialState() {
    return {
      showModal: false,
      isp:1,
      ip:''
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
              <Input ref="ip"
                     type="text" bsSize="small"
                     label="IP"
                     labelClassName="col-xs-2"
                     wrapperClassName="col-xs-7"/>

              <div className="form-group">
                <label className="col-xs-2">运营商：</label>
                <Select name="isp" className="col-xs-7"
                        value={this.state.isp}
                        options={this.props.ispList}
                        onChange={(value)=>{this.setState({isp:value})}}
                        clearable={false}
                        searchable={false}
                        />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button
              bsStyle="primary"
              onClick={this.addPublicIp}
              className="btn-track">
              确定
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
