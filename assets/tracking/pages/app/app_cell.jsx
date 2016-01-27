import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    item: PropTypes.object.isRequired,
    delFn: PropTypes.func.isRequired,
    showEditModalFn: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      showModal: false
    }
  },

  delApp() {
    this.props.delFn(this.props.item.appid)
  },

  showEdit() {
    this.props.showEditModalFn(this.props.item)
  },

  close() {
    this.setState({showModal: false})
  },

  open() {
    this.setState({showModal: true})
  },


  render() {
    const delAppModal = (
      <div className="static-modal delete-icon">
        <a onClick={this.open} className="cicon bkgc-orange">
           <i className="fa fa-trash"></i>
        </a>
        <Modal className="modal-track" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>删除APP</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="form-horizontal text-center">
              <p>确认删除该APP？删除后将不再继续统计/计算该APP数据！</p>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close} className="btn-track">取消</Button>
            <Button bsStyle="primary" onClick={this.delApp} className="btn-track">确定</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )

    return (
      <div className="app-cell" >
        <div style={{display: this.props.item.authority === 2 ? 'block' : 'none'}} className="authorized-logo">
          <a href="javascript:;" className="cicon bkgc-gray"><i className="fa fa-eye"></i></a>
        </div>
        <div className="app-manage clearfix">
          <a href="javascript:;" className="cicon bkgc-green" onClick={this.showEdit}><i className="fa fa-cog"></i></a>
          {delAppModal}
        </div>
        <div className="app-info">
          <div className="game-icon" style={{display: this.props.item.category === 2 ? 'block' : 'none'}}></div>
          <div className="app-icon" style={{display: this.props.item.category === 1 ? 'block' : 'none'}}></div>
          <div className="sketch">
            <p className="title" title={this.props.item.name}>{this.props.item.name}</p>
            <p className="item">总安装：{this.props.item.activatedAmount}</p>
            <p className="item">今日安装：{this.props.item.activatedAmountToday}</p>
          </div>
        </div>
        <div className="actions">
          <a href={`#/channels/${this.props.item.appid}`} className="text-center">
            <i className="fa fa-plus"></i>&nbsp;
            <span>创建活动</span>
          </a>
          <a href={'#/realtime/' + this.props.item.appid} className="text-center">
            <i className="fa fa-bar-chart"></i>&nbsp;
            <span>实时统计</span>
          </a>
        </div>
      </div>
    )
  }
})
