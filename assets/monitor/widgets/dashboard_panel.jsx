import React from 'react'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          {this.props.name}{this.props.value}
        </div>
      </div>
    )
  }
})
