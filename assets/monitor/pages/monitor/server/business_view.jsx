import React, {PropTypes} from 'react'
import BasicPage from './page_widgets/basic_page.jsx'
import Search from '../../../widgets/search_bar.jsx'
import Select from 'react-select'

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

  search(searchKey) {
    this.setState({
      searchKey
    })
  },

  clear() {
    this.setState({
      searchKey: ''
    })
  },

  selectModule(value) {
    this.setState({moduleId: value})

    Object.assign(this.postData, {moduleId: value})
    this.query(this.postData)
  },

  componentDidMount() {
    this.props.actions.servermonitorGetModule({
      busiId: this.props.params.id
    })
  },

  render() {
    return (
      <BasicPage actions={this.props.actions}
                 states={this.props.states}
                 params={this.props.params}
                 pageNav={this.props.pageNav}
                 searchKey={this.state.searchKey}
                 actionName="servermonitorQueryBusiServer"
                 idName="busiId"
                 moduleId={this.state.moduleId}
                 hasModuleSelect
        >
        <div>
          <div className="pull-left select-wrapper">
            <Select name="form-field-name"
                    value={this.state.moduleId}
                    options={this.props.states.servermonitor.moduleList}
                    onChange={this.selectModule}
                    clearable={false}
                    searchable={false}
                    isLoading={this.props.states.servermonitor.listLoading}
                    placeholder="模块选择"
              />
          </div>
          <Search search={this.search}
                  clear={this.clear}
                  ref="searchKey"
                  value={this.state.searchKey} />
        </div>
      </BasicPage>
    )
  }
})
