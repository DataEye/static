import React, {PropTypes} from 'react'
import {Table} from 'react-bootstrap'

export default React.createClass({
  propTypes: {
    data:PropTypes.array.isRequired
  },

  render() {
    return (
        <div className="panel panel-info">
          <div className="panel-body">
            <Table hover className="text_center">
              <thead>
              <tr>
                <th className="text_center">业务</th>
                <th className="text_center">设备数</th>
                <th className="text_center">占比</th>
              </tr>
              </thead>

              <tbody>
              {
                this.props.data.map((item)=>{
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.value}</td>
                      <td>{item.percentage}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </Table>
          </div>
      </div>
    )
  }
})
