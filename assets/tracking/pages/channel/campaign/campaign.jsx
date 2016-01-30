import React, {PropTypes} from 'react'
import Edit from './edit.jsx'
import Delete from './delete.jsx'
import Td from '../../../widgets/td_center.jsx'

export default React.createClass({
  propTypes: {
    id: PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    downloadUrl: React.PropTypes.string.isRequired,
    trackUrl: React.PropTypes.string.isRequired,
    appid: PropTypes.string.isRequired,
    channelId: PropTypes.string.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  render() {
    return (
      <tr>
        <Td>{this.props.name}</Td>
        <Td>{this.props.downloadUrl}</Td>
        <Td>{this.props.trackUrl}</Td>
        <Td>
          <Edit
            id={this.props.id}
            text="编辑"
            appid={this.props.appid}
            channelId={this.props.channelId}
            actions={this.props.actions}
            states={this.props.states}
            name={this.props.name}
            downloadUrl={this.props.downloadUrl}
            trackUrl={this.props.trackUrl}
          />
          <Delete
            id={this.props.id}
            text="删除"
            appid={this.props.appid}
            name={this.props.name}
            channelId={this.props.channelId}
            actions={this.props.actions}
            states={this.props.states}
          />
        </Td>
      </tr>
    )
  }
})
