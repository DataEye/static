import React, {PropTypes} from 'react'

export default React.createClass({
  propTypes: {
    title: PropTypes.string,
    choicedTab: PropTypes.string.isRequired,
    tabs: PropTypes.array.isRequired,
    choiceTab: PropTypes.func.isRequired
  },

  choiceTab(tab) {
    return () => {
      this.props.choiceTab(tab)
    }
  },

  render() {
    const tabs = this.props.tabs.map((item) => {
      return (<li onClick={this.choiceTab(item)} key={item} className={(this.props.choicedTab === item) ? 'on-choiced' : ''}>
                {item}
              </li>)
    })
    return (
      <div className="tabs">
        {this.props.title ? <span className="pull-left">{this.props.title}</span> : ''}
        <ul>
          {tabs}
        </ul>
      </div>
    )
  }
})
