import React from 'react'
import Select from 'react-select'
import {SEARCH_TYPE_OPTIONS} from '../../../helpers/constants.jsx'
import Search from '../../../widgets/search_bar.jsx'

export default React.createClass({
  propTypes: {
    queryDevice: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {
      searchType:0,
      searchKey:'',
      id:-1
    }
  },

  selectSearchType: function(value) {
    this.setState(
      {searchType: value}
    )
  },

  handleRequest: function(searchKey) {
    this.setState({
      searchKey:searchKey
    })

    this.props.queryDevice(
       this.state.searchType,
       searchKey
    )
  },

  clearSearch: function() {
    this.setState(
      {searchKey:''}
    )
  },

  render() {
    return (
      <div className="content-header clearfix form-horizontal">
        <div className="select-wrapper pull-left">
          <Select name="form-field-name"
                  clearable={false}
                  value={this.state.searchType}
                  searchable={false}
                  options={SEARCH_TYPE_OPTIONS}
                  onChange={this.selectSearchType}/>
        </div>

        <Search search={this.handleRequest}
                clear={this.clearSearch}
                className="pull-left"
                ref="searchKey"
                value={this.state.searchKey}
        />

        <a href={'#/configuration/devices/add_update/' + this.state.id}
           className="btn-custom btn-large btn-blue pull-right" >
          <i className="fa fa-plus"></i>&nbsp;
          <span>添加主机</span>
        </a>

      </div>
    )
  }
})
