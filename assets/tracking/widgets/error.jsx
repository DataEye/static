import React, {PropTypes} from 'react'
import Timer from 'dejs/lib/timer'

export default React.createClass({
  propTypes: {
    message: PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      show: this.checkError(this.props.message),
      timer: new Timer(this.show, 3000)
    }
  },

  checkError(message) {
    return message.trim().length > 0
  },

  hide() {
    this.setState({show: false})
  },

  render() {
    return (
      <div className="error" style={{display: this.state.show ? 'block' : 'none'}}>
        <div className="errorInner">
          {this.props.message}
        </div>
      </div>
    )
  }
})
