import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    link: PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      link: 'javascript:;'
    }
  },

  render() {
    return (
      <a href={this.props.link} className="btn btn-default btn-xs icon">
        <i className="fa fa-download"></i>
      </a>
    )
  }
})
