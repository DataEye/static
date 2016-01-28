import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'
import NewLink from '../../../widgets/new_link.jsx'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    busiList: PropTypes.array,
    moduleList:PropTypes.array,
    addBusiModule:PropTypes.func
  },

  addBusiModule() {
    let moduleId = this.state.module
    let busiId = this.state.business

    const m = this.props.moduleList.findIndex((element) => {
      return element.value === moduleId
    })

    let moduleName = this.props.moduleList[m].label

    const b = this.props.busiList.findIndex((element) => {
      return element.value === busiId
    })

    let busiName = this.props.busiList[b].label

    this.props.addBusiModule(busiId, busiName, moduleId, moduleName)
    this.setState({showModal: false})
  },

  getInitialState() {
    return {
      showModal: false,
    }
  },

  handleBusinessChange(value) {
    this.setState({business: value})
    let data = []
    this.props.moduleList.map((item) => {
      if (item.itemId === value) {
        data.push(item)
      }
    })

    if (data.length > 0) {
      this.setState({module:data[0].value})
      this.setState({moduleList: data})
    } else {
      this.setState({moduleList: []})
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
              <div className="form-group">
                <label className="col-xs-2">业务：</label>
                <Select name="business" className="col-xs-7"
                        value={this.state.business}
                        options={this.props.busiList}
                        onChange={this.handleBusinessChange}
                        clearable={false}
                        searchable={false}/>
              </div>

              <div className="form-group">
                <label className="col-xs-2">模块：</label>
                <Select name="module" className="col-xs-7"
                        value={this.state.module}
                        options={this.state.moduleList}
                        onChange={(value)=>{this.setState({module:value})}}
                        clearable={false}
                        searchable={false}/>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button
              bsStyle="primary"
              onClick={this.addBusiModule}
              className="btn-track">
              确定
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
})
