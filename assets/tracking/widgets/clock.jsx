import React from 'react'
import Timer from 'dejs/lib/timer'

export default React.createClass({
  propTypes: {
    UTCOffset: React.PropTypes.string
  },

  getInitialState() {
    return {
      timer: new Timer(this.setTime, 1000)
    }
  },

  setTime: function() {
    let currentdate = new Date()
    let hours = currentdate.getUTCHours() + parseInt(this.props.UTCOffset, 10)

    // correct for number over 24, and negatives
    if (hours >= 24) {hours -= 24 }
    if (hours < 0) {hours += 12 }

    // add leading zero, first convert hours to string
    hours = '' + hours
    if (hours.length === 1) { hours = '0' + hours }

    // minutes are the same on every time zone
    let minutes = currentdate.getUTCMinutes()

    // add leading zero, first convert hours to string
    minutes = '' + minutes
    if (minutes.length === 1) { minutes = '0' + minutes }

    let seconds = currentdate.getUTCSeconds()
    seconds = seconds.toString()
    if (seconds.length === 1) { seconds = '0' + seconds }

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  },

  componentWillMount: function() {
    this.setTime()
  },

  componentDidMount: function() {
    this.state.timer.run()
  },

  componentWillUnmount() {
    this.state.timer.cancel()
  },

  render: function() {
    return (
      <div className="city-row" ref="cityRow">
        <h3 className="city-time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</h3>
      </div>
    )
  }
})
