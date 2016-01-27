import React from 'react'

export default React.createClass({
  propTypes: {
    children: React.PropTypes.any
  },

  render() {
    return (
      <th className="th-center">
        {this.props.children}
      </th>
    )
  }
})
