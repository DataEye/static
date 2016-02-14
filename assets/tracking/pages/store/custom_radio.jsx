import React from 'react'

export default React.createClass({
  propTypes: {
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    storeId: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func,
    actions: React.PropTypes.object,
    states: React.PropTypes.object
  },

  getInitialState() {
    return {
      showDelete: false
    }
  },

  mouseOver: function() {
    this.setState({showDelete: true})
  },

  mouseOut: function() {
    this.setState({showDelete: false})
  },

  delCustom() {
    this.props.actions.storeDelCustomStore({
      id: this.props.storeId,
      uid: window.App.uid
    })
  },

  handleClick() {
    this.props.onClick(this.props.storeId)
  },

  render() {
    return (
      <div className="radio item-radio-custom"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <label title={this.props.label}>
          <input
            onClick={this.handleClick}
            type="radio"
            name={this.props.name}
            value={this.props.storeId}
          />
          {this.props.label}
        </label>
        <div className="delete-cross">
          <i
            style={{display: this.state.showDelete ? 'inline-block' : 'none'}}
            onClick={this.delCustom}
            className="fa fa-times"
          />
        </div>
      </div>
    )
  }
})
