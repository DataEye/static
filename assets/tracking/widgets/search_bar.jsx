import React from 'react'
import {KEYCODE_OF_ENTER} from '../helpers/constants.jsx'

export default React.createClass({
  propTypes: {
    search: React.PropTypes.func.isRequired,
    clear: React.PropTypes.func,
    type: React.PropTypes.string,
    className: React.PropTypes.string
  },

  getInitialState() {
    return {value: '', showClearBtn: false}
  },

  handleChange(event) {
    this.setState({value: event.target.value})
    this.state.showClearBtn = true
  },

  handleKeyUp(event) {
    if (this.props.type === 'client') {
      this.search()
    }
    if (event.keyCode === KEYCODE_OF_ENTER) {
      this.search()
    }
  },

  search() {
    this.props.search(this.state.value)
  },

  clear() {
    this.setState({value: '', showClearBtn: false})
    this.props.search('')
    if (typeof this.props.clear === 'function') {
      this.props.clear()
    }
  },

  foucs() {
    if (this.state.value) {
      this.setState({showClearBtn: true})
    }
  },

  render() {
    return (
      <div className={'search-bar' + (this.props.className ? ' ' + this.props.className : '')} >
        <input type="text" placeholder="搜索" value={this.state.value} onChange={this.handleChange} onKeyUp={this.handleKeyUp} onFocus={this.foucs}/>
        <a href="javascript:;" title="清空" className="quickdelete"
           style={{display: this.state.showClearBtn ? 'block' : 'none'}}
           onClick={this.clear}></a>
        <i className="pull-right fa fa-search" onClick={this.search}></i>
      </div>
    )
  }
})
