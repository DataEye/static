import React from 'react'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render() {
    return (
      <div className="container-header">
        {this.props.children}
      </div>
    )
  }
})
