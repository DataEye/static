import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    pageNav: PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      nav: ''
    }
  },

  regroupNav(value) {
    let navArr = (value).split('>')
    let nav = navArr.map((item, i) => {
      return (<span className={'title' + (i + 1)} key={item}>
        {item}
        {i + 1 >= navArr.length ? '' : ' > '}
      </span>)
    })
    this.setState({nav: nav})
  },

  componentDidMount() {
    this.regroupNav(this.props.pageNav)
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.pageNav !== nextProps.pageNav) {
      this.regroupNav(nextProps.pageNav)
    }
  },

  render() {
    return (<div className="header">
              {this.state.nav}
            </div>)
  }
})
