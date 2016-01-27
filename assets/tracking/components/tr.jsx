import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    tds: PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      tds: []
    }
  },

  render() {
    return (
      <tr>
        {this.props.tds.map((td) => {
          return <td key={td}>{td}</td>
        })}
      </tr>
    )
  }
})
