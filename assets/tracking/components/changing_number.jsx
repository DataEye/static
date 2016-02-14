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
      start: 1,
      num: this.props.num
    }
  },

  componentWillReceiveProps(nextProps) {
    const delta = nextProps.num - this.state.num || 0
    if (delta >= 0) {
      this.setState({delta: `+${delta}`})
    } else if (delta < 0) {
      this.setState({delta: '+0'})
    }
    this.animate()
    this.setState({num: nextProps.num})
  },

  animate() {
    this.tweenState('start', {
      beginValue: 1,
      endValue: 0,
      duration: 1500
    })
  },

  format(val) {
    return this.props.formatter.call(null, val)
  },

  render() {
    const animation = {
      color: 'green',
      opacity: this.getTweeningValue('start'),
      top: `${(this.getTweeningValue('start') * 2).toString()}px`,
      fontSize: '12px',
      position: 'absolute'
    }

    return (
      <span style={{display: 'inline-block', position: 'relative'}}>
        <span>{this.format(this.state.num)}</span>
        <span style={animation}>{this.state.delta}</span>
      </span>
    )
  }
})
