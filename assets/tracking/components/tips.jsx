import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    tips: PropTypes.array.isRequired
  },

  getInitialState() {
    return {
      show: false
    }
  },

  componentWillUnmount() {
    this.setState({show: false})
  },

  getDefaultProps() {
    return {
      tips: []
    }
  },

  handleClick() {
    this.setState({show: !this.state.show})
  },

  render() {
    return (
      <label onClick={this.handleClick} className="btn btn-default btn-xs icon">
        <i className="fa fa-question"></i>
        <div className="tips-area" style={{display: this.state.show ? 'block' : 'none'}}>
          <div>
            <table className="table">
              <tbody>
              {this.props.tips.map((tip) => {
                return (
                  <tr key={tip.id}>
                    <td className="text-left">{tip.metricName}</td>
                    <td className="text-left">{tip.metricDefinition}</td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          </div>
        </div>
      </label>
    )
  }
})
