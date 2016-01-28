import React, {PropTypes} from 'react'
import DashboardPanel from '../../../widgets/dashboard_panel.jsx'

export default React.createClass({
  propTypes: {
    data: PropTypes.array
  },

  render() {
    return (
      <div className="row">
        {this.props.data.map((item) => {
          return (
            <div className="col-md-4" key={item.id}>
              <DashboardPanel
                name={item.name} value={item.value}/>
            </div>
            )
        })}
      </div>
    )
  }
})
