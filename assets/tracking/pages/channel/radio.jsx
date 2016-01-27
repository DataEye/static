import React from 'react'

export default React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    channelId: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  },

  handleClick() {
    this.props.onClick(this.props.channelId, this.props.label)
  },

  render() {
    return (
      <div onClick={this.handleClick} className="radio">
        <label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.channelId}
          />
          {this.props.label}
        </label>
      </div>
    )
  }
})
