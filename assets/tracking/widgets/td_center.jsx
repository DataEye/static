import React from 'react'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render() {
    return (
      <td className="td-center">
        {this.props.children}
      </td>
    )
  }
})
