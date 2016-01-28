import React from 'react'

export default React.createClass({
  propTypes: {
    // 是否加载完成
    loading: React.PropTypes.bool.isRequired,
    children: React.PropTypes.any.isRequired,
  },
  getDefaultProps() {
    return {
      loading: true,
    }
  },
  render() {
    let loadingTips = (
      <div className="content">
        <div className="rloading text-center">
          <i className="fa fa-spinner fa-pulse"></i>
          <div>正在加载，请稍候...</div>
        </div>
      </div>
    )

    let children = this.props.loading ?
      loadingTips : this.props.children

    return (
      <div >
        {children}
      </div>
    )
  }
})
