import React from 'react'

export default React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    action: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      icon: 'cog',
      action: ''
    }
  },

  render() {
    return (
      <a href={this.props.action}>
        <i className={`fa fa-${this.props.icon}`}></i>
      </a>
    )
  }
})
