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
    const _this = this
    // 避免出现页面背景图在加载动画出现之前先出现的问题
    let numOfDownloadedPic = 0
    function oneMorePicDownloaded () {
      _this.refs.progressBar.style.width = ++numOfDownloadedPic / 18 * 100 + '%'
      if (numOfDownloadedPic === 18) {
        setTimeout(() => {
          _this.setState({
            isLoading: false
          })
        }, 900)
      }
    }

    const img = new Image()
    img.src = require('../assets/magic.jpg')
    img.onload = () => {
      $('body').css({
        'background-color': '#000',
        'background-image': `url("${img.src}")`
      })
      oneMorePicDownloaded()
    }

    const imgPiKaQiu = new Image()
    imgPiKaQiu.src = require('../assets/pikaqiu.png')
    imgPiKaQiu.onload = oneMorePicDownloaded

    // 预先加载页面所需其他图片元素
    for (var i = 1; i < 17; i++) {
      const tempImg = new Image()
      tempImg.src = `./static/img/near_1200x800/${i > 9 ? i : '0' + i}.jpg`
      tempImg.onload = oneMorePicDownloaded
    }
  }
  render () {
    return (
      <div className={'app-loading' + (this.state.isLoading ? '' : ' fade-out')}>
        <div className="inner">
          <div className="progress-bar-wrapper">
            <div ref="progressBar" className="progress-bar">
              <i className="fa fa-chrome fa-pulse fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
