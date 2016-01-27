import React from 'react'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render() {
    return (
      <div className="td-operations">
        {this.props.children}
      </div>
    )
  }
})
