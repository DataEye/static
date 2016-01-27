import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    title: PropTypes.string.isRequired,
    symbol: PropTypes.string,
    showSymbol: PropTypes.any
  },

  getDefaultProps() {
    return {
      symbol: '自',
      showSymbol: false
    }
  },

  render() {
    return (
      <div style={{display: 'inline-block'}}>
        {this.props.title}
        <span
          className="label label-custom"
          style={{display: !this.props.showSymbol ? 'none' : 'inline-block'}}
        >
          {this.props.symbol}
        </span>
      </div>
    )
  }
})
