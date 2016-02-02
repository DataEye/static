import React from 'react'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      text: 'New',
      href: 'javascript:;'
    }
  },

  render() {
    return (
      <a href={this.props.href}
        className="btn-custom btn-s btn-green"
        onClick={this.props.handleClick}
      >
        <i className="fa fa-plus"></i>
        {this.props.text}
      </a>
    )
  }
})
