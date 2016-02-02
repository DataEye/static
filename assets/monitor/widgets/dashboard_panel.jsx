import React from 'react'

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <div className="summary-panel clearfix">
        <div className={`summary-icon-wrapper summary-icon-${this.props.name}`}>
          <div></div>
        </div>
        <div className="summary-content">
          <p className="text-center summary-num">{this.props.value}</p>
          <p className="text-center summary-name">{this.props.name}</p>
        </div>
      </div>
    )
  }
})
