import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
  },

  getDefaultProps() {
    return {
      label: '自然流量'
    }
  },

  onChange(e) {
    if (e.target.checked) {
      this.props.onChange(2)
    } else {
      this.props.onChange(1)
    }
  },

  render() {
    return (
      <div>
        <span>{this.props.name}</span>
        <div className="pull-right" >
          <label>
            <input type="checkbox" onChange={this.onChange}/>
            {this.props.label}
          </label>
        </div>
      </div>
    )
  }
})
