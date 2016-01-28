import React, {PropTypes} from 'react'
import Calander from './calander.jsx'

export default React.createClass({
  propTypes: {
    onConfirm: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['tendency', 'contrast']).isRequired,
    changeType: PropTypes.func.isRequired
  },

  changeType(type) {
    return () => {
      this.props.changeType(type)
    }
  },

  contrastCalenderComfirm1(value) {
    this.setState({
      contrastDate1: value
    })
  },

  contrastCalenderComfirm2(value) {
    this.setState({
      contrastDate2: value
    })
  },

  onConfirm(type) {
    return (value) => {
      if (type === 'tendency') {
        this.props.onConfirm({type, date: value})
      } else if (type === 'contrast') {
        const start1 = Date.parse(this.state.contrastDate1.start)
        const start2 = Date.parse(this.state.contrastDate2.start)
        const end1 = Date.parse(this.state.contrastDate1.end)
        const end2 = Date.parse(this.state.contrastDate2.end)
        if (end1 - start1 !== end2 - start2) {
          alert('对比日期间隔不一致，请重新选择！')
        } else {
          this.props.onConfirm({type, date: [this.state.contrastDate1, this.state.contrastDate2]})
        }
      }
    }
  },

  render() {
    return (
      <div className="filter">
        <div className={'type' + ' ' + (this.props.type === 'tendency' ? 'selected-type' : '')} onClick={this.changeType('tendency')}>
          <i className="fa fa-check-circle"></i>趋势
        </div>
        <div className={'type' + ' ' + (this.props.type === 'contrast' ? 'selected-type' : '')} onClick={this.changeType('contrast')}>
          <i className="fa fa-check-circle"></i>对比
        </div>
        {this.props.type === 'tendency' ? <Calander onConfirm={this.onConfirm('tendency')} name="calander-tendency"/> : '' }
        {this.props.type === 'contrast' ? <Calander onConfirm={this.contrastCalenderComfirm1} name="calander-contrast1"/> : '' }
        {this.props.type === 'contrast' ? <Calander onConfirm={this.contrastCalenderComfirm2} name="calander-contrast2" className="clander" /> : '' }
        {this.props.type === 'contrast' ? <span className="contrast pull-right" onClick={this.onConfirm('contrast')}>比较</span> : '' }
      </div>
    )
  }
})
