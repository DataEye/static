import React from 'react'

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    href: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      text: 'New'
    }
  },

  render() {
    return (
      <a className="btn btn-track btn-primary btn-new" href={this.props.href}>
        <i className="fa fa-plus"></i>
        {this.props.text}
      </a>
    )
  }
})
