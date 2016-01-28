import React, {PropTypes} from 'react'
import BasicPage from './page_widgets/basic_page.jsx'
import Search from '../../../widgets/search_bar.jsx'
import AddServer from './addServer.jsx'

export default React.createClass({
  propTypes: {
    children:PropTypes.any,
    actions: PropTypes.object,
    states: PropTypes.object,
    params: PropTypes.object,
    pageNav: PropTypes.string
  },

  getInitialState() {
    return {
      searchkey: ''
    }
  },

  search: function(searchKey) {
    this.setState({
      searchKey: searchKey
    })
  },

  clear: function() {
    this.setState(
      {searchKey:''}
    )
  },

  render() {
    return (
      <BasicPage actions={this.props.actions}
                 states={this.props.states}
                 params={this.props.params}
                 pageNav={this.props.pageNav}
                 searchKey={this.state.searchKey}
                 actionName="servermonitorQueryGroupServer"
                 idName="groupID"
        >
        <div>
          <Search className="pull-left"
                  search={this.search}
                  clear={this.clear}
                  ref="searchKey"
                  value={this.state.searchKey} />
          <div className="pull-right">
            <AddServer text="添加机器"
                       actions={this.props.actions}
                       states={this.props.states}
                       params={this.props.params}
                       pageNav={this.props.pageNav}
              />
          </div>
        </div>
      </BasicPage>
    )
  }
})