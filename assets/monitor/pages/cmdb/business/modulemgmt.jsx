import React, {PropTypes} from 'react'
import {Modal, Button, Input} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import Delete from '../../../widgets/delete.jsx'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object,
    data: PropTypes.array,
    busiId: PropTypes.number.isRequired
  },

  addModule() {
    let busiId = this.props.busiId
    let name = this.refs.name.getValue()
    let value = this.state.omPerson
    let employeeList = this.props.states.business.employeeList
    const index = this.props.states.business.employeeList.findIndex((element) => {
      return element.value === value
    })

    let omPersonName = employeeList[index].label

    this.props.actions.businessAddModule(
      {
        busiId:busiId,
        moduleName:name,
        omPerson:value,
        omPersonName:omPersonName
      })
  },

  getInitialState() {
    return {
      showModal: false,
      options: [],
      omPerson:''
    }
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },

  deleteModule(id) {
    this.props.actions.businessDeleteModule({
      busiId:this.props.busiId,
      moduleId:id
    })
  },

  render() {
    return (
      <div className="static-modal">
        <a onClick={this.open}>
          {this.props.text}
        </a>
        <Modal className="modal-track"
               show={this.state.showModal}
               onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>模块管理</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table hover className="text_center">
              <thead>
              <tr>
                <th className="text_center">模块名</th>
                <th className="text_center">运维负责人</th>
                <th className="text_center">操作</th>
              </tr>
              </thead>

              <tbody>
              {
                this.props.data.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.omPersonName}</td>
                      <td>
                        <Delete itemId={item.id} btntext="删除"
                                title="删除模块"
                                prompt="确认删除该模块吗?"
                                delfunc={this.deleteModule}/>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </Table>

            <form className="form-horizontal">
              <Input ref="name"
                     type="text"
                     label="模块名:"
                     labelClassName="col-xs-2 text-right"
                     wrapperClassName="col-xs-7"/>

              <div className="form-group">
                <label className="col-xs-2 text-right">运维人:</label>
                <Select name="form-field-name"
                        className="col-xs-7"
                        value={this.state.omPerson}
                        options={this.props.states.business.employeeList}
                        onChange={(value)=>{this.setState({omPerson:value})}} />
              </div>
              <Button
                onClick={this.addModule}
                className="btn-track">
                添加
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}
                    className="btn-track">关闭</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
