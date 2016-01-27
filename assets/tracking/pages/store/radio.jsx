import React from 'react'

export default React.createClass({
  propTypes: {
    id: React.PropTypes.number.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  },

  handleClick() {
    this.props.onClick(this.props.id)
  },

  render() {
    return (
      <div onClick={this.handleClick} className="radio">
        <label>
          <input
            type="radio"
            name={this.props.name}
            value={this.props.id}
          />
          {this.props.label}
        </label>
      </div>
    )
  }
})
