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
    //��Ҫ���resize�¼�,֮���ʹ��refs��ȡ��DOM
  },

  render() {
    return (
        <div id="footer">
        </div>
    )
  }
})
