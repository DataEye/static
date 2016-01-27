import React from 'react'
import Select from 'react-select'

export default React.createClass({
  propTypes: {
    states: React.PropTypes.object,
    setDownloadId: React.PropTypes.func
  },

  getInitialState() {
    return {
      options: []
      // downloadId: this.props.downloadId
    }
  },

  renderOption: function(option) {
    return <span style={option.isGroupName ? {color: 'blue'} : {paddingLeft: '20px'}}>{option.label}</span>
  },

  componentDidMount() {
    this.buildOptions(this.props.states.channel.downloadUrlNames)
  },

  buildOptions(downloadUrlNames) {
    let options = []
    for (let i = 0, len1 = downloadUrlNames.length; i < len1; i++) {
      options.push({
        value: Math.random() + i,
        label: downloadUrlNames[i].name,
        disabled: true,
        isGroupName: true
      })
      for (let j = 0, len2 = downloadUrlNames[i].downloadUrls.length; j < len2; j++) {
        options.push({
          value: (downloadUrlNames[i].downloadUrls)[j].id,
          label: (downloadUrlNames[i].downloadUrls)[j].name
        })
      }
    }
    this.setState({options: options})
  },

  handleChange(val) {
    this.setState({downloadId: val})
    this.props.setDownloadId(val)
  },

  render() {
    return (
      <Select
        placeholder="请选择下载地址"
        name="downloadId"
        options={this.state.options}
        onChange={this.handleChange}
        value={this.state.downloadId}
        optionRenderer={this.renderOption}
      />
    )
  }
})
