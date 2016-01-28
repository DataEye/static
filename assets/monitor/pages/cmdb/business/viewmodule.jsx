import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'
import {Table} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object,
    module:PropTypes.array,
    name:PropTypes.string,
    omPerson:PropTypes.string
  },

  getInitialState() {
    return {
      showModal: false,
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
        <a onClick={this.open}>
          {this.props.text}
        </a>
        <Modal className="modal-track"
               show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>查看模块信息</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <span>业务名:</span>
                <span>{this.props.name}</span>
              </div>

              <div>
                <span>运维人:</span>
                <span>{this.props.omPerson}</span>
              </div>
              </div>
            <div>
              <span>模块信息</span>
              <Table hover className="text_center">
                <thead>
                <tr>
                  <th className="text_center">业务名称</th>
                  <th className="text_center">运维负责人</th>
                </tr>
                </thead>

                <tbody>
                {
                  this.props.module.map((item)=>{
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.omPerson}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </Table>
            </div>
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
