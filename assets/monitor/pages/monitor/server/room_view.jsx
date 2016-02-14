import React, {PropTypes} from 'react'
import BasicPage from './page_widgets/basic_page.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav: PropTypes.string
  },

  render() {
    return (
      <BasicPage actions={this.props.actions}
                 states={this.props.states}
                 params={this.props.params}
                 pageNav={this.props.pageNav}
                 actionName="servermonitorQueryIdcServer"
                 idName="idcId"
        />
    )
  }
})
