import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    uid: PropTypes.number.isRequired,
    del: PropTypes.func,
    onClick: PropTypes.func
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

  del() {
    this.props.del()
  },

  handleClick() {
    this.props.onClick(this.props.id)
  },

  render() {
    return (
      <div className="radio item-radio-custom"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        <label>
          <input
            onClick={this.handleClick}
            type="radio"
            name={this.props.name}
            value={this.props.id}
          />
          {this.props.label}
        </label>
        <div className="delete-cross">
          <i
            style={{display: this.state.showDelete ? 'inline-block' : 'none'}}
            onClick={this.del}
            className="fa fa-times"
          />
        </div>
      </div>
    )
  }
})
