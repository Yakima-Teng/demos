import React from 'react'
import $ from 'jquery'

export default class appLoading extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount () {
    // 避免出现页面背景图在加载动画出现之前先出现的问题
    const img = new Image()
    img.src = require('../assets/magic.jpg')
    img.onload = () => {
      $('body').css({
        'background-color': '#000',
        'background-image': `url("${img.src}")`
      })
    }

    // 预先加载页面所需其他图片元素
    for (var i = 1; i < 17; i++) {
      new Image().src = `./static/img/near_1200x800/${i > 9 ? i : '0' + i}.jpg`
    }
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }
  render () {
    return (
      <div className={'app-loading' + (this.state.isLoading ? '' : ' fade-out')}>
        <div className="inner">
          <i className="fa fa-spinner fa-pulse fa-5x"></i>
        </div>
      </div>
    )
  }
}
