import React, {PropTypes} from 'react'
import Edit from './edit.jsx'
import Delete from './delete.jsx'
import Td from '../../../widgets/td_center.jsx'
import Operations from '../../../widgets/td_operations.jsx'

export default React.createClass({
  propTypes: {
    id: PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    appid: PropTypes.string.isRequired,
    storeId: PropTypes.number.isRequired,
    actions: PropTypes.object,
    states: PropTypes.object
  },

  render() {
    return (
      <tr>
        <Td>{this.props.name}</Td>
        <Td>{this.props.link}</Td>
        <Td>
          <Operations>
            <Edit
              id={this.props.id}
              text="编辑"
              name={this.props.name}
              link={this.props.link}
              appid={this.props.appid}
              storeId={this.props.storeId}
              actions={this.props.actions}
            />
            <Delete
              id={this.props.id}
              text="删除"
              name={this.props.name}
              appid={this.props.appid}
              storeId={this.props.storeId}
              actions={this.props.actions}
            />
          </Operations>
        </Td>
      </tr>
    )
  }
})
