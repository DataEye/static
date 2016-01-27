import React, {PropTypes} from 'react'
import tweenState from 'react-tween-state'

export default React.createClass({
  mixins: [tweenState.Mixin],

  propTypes: {
    num: PropTypes.number.isRequired,
    formatter: PropTypes.func
  },

  getDefaultProps() {
    return {
      num: 0,
    }
  },

  getInitialState() {
    return {
      start: 1
    }
  },

  componentWillReceiveProps(nextProps) {
    const delta = nextProps.num - this.props.num || 0
    if (delta >= 0) {
      this.setState({delta: `+${delta}`, color: 'green'})
    } else if (delta < 0) {
      this.setState({delta: `${delta}`, color: 'red'})
    }
    this.animate()
  },

  animate() {
    this.tweenState('start', {
      beginValue: 1,
      endValue: 0,
      duration: 1500
    })
  },

  format(val) {
    return this.props.formatter.call(val)
  },

  render() {
    const animation = {
      color: this.state.color,
      opacity: this.getTweeningValue('start'),
      top: `${(this.getTweeningValue('start') * 2).toString()}px`,
      fontSize: '12px',
      position: 'absolute'
    }

    return (
      <span style={{display: 'inline-block', position: 'relative'}}>
        <span>{this.format(this.props.num)}</span>
        <span style={animation}>{this.state.delta}</span>
      </span>
    )
  }
})
