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
    this.setState({
      value: event.target.value,
      showClearBtn: true
    })
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
    if (typeof this.props.clear === 'function') {
      this.props.clear()
    }
    this.refs.textInput.focus()
    this.setState({value: '', showClearBtn: false})
  },
  foucs() {
    if (this.state.value) {
      this.setState({
        showClearBtn: true
      })
    }
    this.setState({onFocus: true})
  },

  onBlur() {
    this.setState({onFocus: false})
  },

  render() {
    return (
        <div className={this.props.className ? this.props.className : '' + `${this.state.onFocus ? 'on-foucs' : ''}`}>
          <div className="search-bar">
            <input type="text"
                   ref="textInput"
                   placeholder="搜索"
                   value={this.state.value}
                   onChange={this.handleChange}
                   onKeyUp={this.handleKeyUp}
                   onFocus={this.foucs}
                   onBlur={this.onBlur}
                />
            <a href="javascript:;" title="清空" className="quickdelete"
               style={{display: this.state.showClearBtn ? 'block' : 'none'}}
               onClick={this.clear}></a>
          </div>
          <span className="search-btn" onClick={this.search}>搜索</span>
        </div>
    )
  }
})
