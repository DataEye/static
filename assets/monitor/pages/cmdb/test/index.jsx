import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import {Input} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    children:React.PropTypes.any,
    actions: React.PropTypes.object,
    states: React.PropTypes.object
  },

  getDefaultProps() {
    return {

    }
  },

  getInitialState() {
    return {
      jobs:[],
      jobTypes : ['A', 'B', 'C', 'D']
    }
  },

  addJobs(quantity) {
    let startId = this.state.jobs.length
    let jobs = this.state.jobs
    for (let i = 0; i < quantity; i++) {
      let id = startId + i
      jobs.push({
        id: id,
        name: 'Item name ' + id,
        type: 'B',
        active: i % 2 === 0 ? 'Y' : 'N'
      })
    }

    this.setState({
      jobs:jobs
    })
  },

  componentWillMount: function() {
    let quantity = 5
    this.addJobs(quantity)
  },

  cellEditProp: function() {
    return {
      mode: 'click',
      blurToSave: true
    }
  },

  jobNameValidator: function(value) {
    let validate = ''
    let length = 10
    if (!value) {
      validate = 'Job Name is required!'
    } else if (value.length < length) {
      validate = 'Job Name length must great 10 char'
    } else {
      validate = true
    }
    return validate
  },

  selectRowProp: function() {
    return {
      mode: 'radio',
      clickToSelect: true,
      bgColor: 'rgb(238, 193, 213)'
    }
  },

  render() {
    return (
      <div className="main">
        <BootstrapTable data={this.state.jobs}
                        cellEdit={{mode: 'click', blurToSave: true}}
                        insertRow
                        deleteRow
                        selectRow={{mode: 'checkbox', clickToSelect: true}}>
          <TableHeaderColumn dataField="id" isKey hidden autoValue>Job ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" editable={{type:'textarea', validator:this.jobNameValidator}}>Job Name</TableHeaderColumn>
          <TableHeaderColumn dataField="type" editable={{type:'select', options:{values:this.state.jobTypes}}}>Job Type</TableHeaderColumn>
          <TableHeaderColumn dataField="active" editable={{type:'checkbox', options:{values:'Y:N'}}}>Active</TableHeaderColumn>
        </BootstrapTable>


        <form>
          <Input type="text" bsStyle="success" label="Success" hasFeedback />
          <Input type="text" bsStyle="warning" label="Warning" hasFeedback />
          <Input type="text" bsStyle="error" label="Error" hasFeedback />
        </form>
      </div>
    )
  }
})
