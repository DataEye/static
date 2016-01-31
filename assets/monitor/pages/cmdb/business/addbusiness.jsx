import React, {PropTypes} from 'react'
import {Modal, Input} from 'react-bootstrap'
import NewLink from '../../../widgets/new_link.jsx'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    actions: PropTypes.object,
    employeeList:PropTypes.array
  },

  addBusiness() {
    let name = this.refs.name.getValue()
    let value = this.state.omPerson

    if (name === '') {
      alert('请输入业务名称')
      return
    }

    if (value === '') {
      alert('请选择运维负责人')
      return
    }

    const index = this.props.employeeList.findIndex((element) => {
      return element.value === value
    })

    let omPersonName = this.props.employeeList[index].label

    this.props.actions.businessAddBusiness(
      {
        busiName:name,
        omPerson:value,
        omPersonName:omPersonName
      }
     )

    this.setState({showModal: false})
  },

  getInitialState() {
    return {
      showModal: false,
      omPerson:''
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
        <NewLink text={this.props.text} handleClick={this.open}/>
        <Modal className="modal-track"
               show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>添加业务</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal">
              <Input ref="name"
                type="text"
                label="业务名称:"
                labelClassName="col-xs-2 text-right"
                wrapperClassName="col-xs-9"
              />

              <div className="form-group">
                <label className="col-xs-2 text-right">运维人:</label>
                <div className="col-xs-9 ">
                  <Select name="form-field-name"
                          value={this.state.omPerson}
                          options={this.props.employeeList}
                          onChange={(value)=>{this.setState({omPerson:value})}}
                    />
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn-custom btn-small btn-white pull-left" onClick={this.close}>取消</button>
            <button className="btn-custom btn-small btn-blue pull-right" onClick={this.addBusiness}>确定</button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
