import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
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
                wrapperClassName="col-xs-7"
              />

              <div className="form-group">
                <label className="col-xs-2 text-right">运维人:</label>
                <Select name="form-field-name"
                        className="col-xs-7 "
                        value={this.state.omPerson}
                        options={this.props.employeeList}
                        onChange={(value)=>{this.setState({omPerson:value})}}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button
              bsStyle="primary"
              onClick={this.addBusiness}
              className="btn-track">
              确定
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
