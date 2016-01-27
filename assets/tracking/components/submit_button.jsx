import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    submit: PropTypes.func.isRequired,
    text: PropTypes.string
  },

  getDefaultProps() {
    return {
      text: '提交'
    }
  },

  handleClick() {
    this.props.submit()
    this.refs.button.disabled = true
  },

  render() {
    return (
      <button
        ref="button"
        className="btn btn-primary custom-btn-long"
        style={{marginRight: '10px'}}
        onClick={this.handleClick}
      >
        {this.props.text}
      </button>
    )
  }
})
