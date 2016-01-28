import React from 'react'

export default React.createClass({
  componentDidMount() {
    let header = document.getElementById('header')
    let container = document.getElementById('main-container')
    let footer = document.getElementById('footer')
    let windowHeight = window.innerHeight
    let contentHeight = header.offsetHeight + container.offsetHeight + footer.offsetHeight

    if (contentHeight > windowHeight) {
      footer.style.position = 'static'
    }
    //需要添加resize事件,之后会使用refs来取得DOM
  },

  render() {
    return (
        <div id="footer">
        </div>
    )
  }
})
