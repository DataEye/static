import React, {PropTypes} from 'react'
import Pagination from 'rc-pagination'

export default React.createClass({
  propTypes: {
    total: PropTypes.number,
    current: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  },

  render() {
    return (
      <div
        className="text-center"
        style={{display: this.props.total > this.props.pageSize ? 'block' : 'none'}}
      >
        <Pagination {...this.props}/>
      </div>
    )
  }
})
