import React from 'react'
import { merge } from '../scripts/utils.js'

/**
 * 函数代码参考自携程安全应急中心官网首页
 * 地址：https://sec.ctrip.com/
 * 说明：官网的代码是经过混淆的，这里对代码进行了人工润色
 */

export default class Stars extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    // 注意：下面这些数据不要绑定到this.state上，因为通过this.setState更新this.state的数据并不是立即生效的
    // 这些数据自身的改动并不会引起DOM的改变
    this.data = {
      canvas: null,
      ctx: null,
      canvasWidth: '',
      canvasHeight: '',
      backgroundImage: require('../assets/star.jpg'),
      title: 'PLAY BADMINTON',
      timer: null,
      dpr: window.devicePixelRatio || 1
    }
  }

  componentDidMount () {
    this.init()
  }
  componentWillUnmount () {
    if (this.data.timer) {
      window.cancelAnimationFrame(this.data.timer)
    }
  }
  render () {
    return (
      <div className="stars">
        <canvas className="canvas" ref="starsCanvas" width="500" height="300">
          Your browser does not support HTML5 Canvas API
        </canvas>
      </div>
    )
  }

  init () {
    let _this = this
    if (!document.createElement('canvas').getContext) {
      return
    }
    let canvas = _this.refs.starsCanvas
    let ctx = canvas.getContext('2d')
    const canvasWidth = canvas.width
    const canvasHeight = canvas.height

    merge(_this.data, {
      canvas,
      ctx,
      canvasWidth,
      canvasHeight,
    })

    _this.starsCanvas()

    setTimeout(() => {
      if (_this.data.timer) {
        window.cancelAnimationFrame(_this.data.timer)
      }
    }, 60 * 60 * 1000)

    window.addEventListener('resize', _this.starsCanvas.bind(_this), false)
  }
  starsCanvas () {
    let _this = this
    let arr = []
    let count = 0
    const ctx = _this.data.ctx
    let d = 300
    let l = document.createElement('canvas')
    let h = l.getContext('2d')
    l.width = 100
    l.height = 100
    let m = l.width / 2
    let f = h.createRadialGradient(m, m, 3, m, m, 26)
    f.addColorStop(0.025, '#87c0f6')
    f.addColorStop(0.25, '#11417a')
    f.addColorStop(1, 'transparent')
    h.fillStyle = f
    h.beginPath()
    h.arc(m, m, m, 0, 2 * Math.PI)
    h.fill()

    let U = function () {
      this.orbitRadius = _this.t(_this.calculateHalfHypotenuseLength(_this.data.canvasWidth, _this.data.canvasHeight))
      this.radius = _this.t(60, this.orbitRadius) / 12
      this.orbitX = _this.data.canvasWidth / 2
      this.orbitY = _this.data.canvasHeight / 2
      this.timePassed = _this.t(0, d)
      this.speed = _this.t(this.orbitRadius) / 9e5
      this.alpha = _this.t(2, 10) / 10
      count++
      arr[count] = this
    }
    U.prototype.draw = function () {
      const i = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      const s = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
      const a = _this.t(10)
      a === 1 && this.alpha > 0 ? this.alpha -= 0.05 : a === 2 && this.alpha < 1 && (this.alpha += 0.05)
      ctx.globalAlpha = this.alpha
      ctx.drawImage(l, i - this.radius / 2, s - this.radius / 2, this.radius, this.radius)
      this.timePassed += this.speed
    }
    for (let i = 0; i < d; i++) {
      /* eslint-disable no-new */
      new U()
    }
    _this.drawStars(arr)
  }
  t (t, i) {
    if (arguments.length < 2) {
      i = t
      t = 0
    }
    if (t > i) {
      // swap values of t and i
      const s = i
      i = t
      t = s
    }
    return Math.floor(Math.random() * (i - t + 1)) + t
  }
  calculateXOffsetForCenteredText (text) {
    let _this = this
    const metrics = _this.data.ctx.measureText(text)
    const textWidth = metrics.width
    return _this.data.canvasWidth / 2 - textWidth / 2
  }
  // 计算以canvas最长边长度为直角边长度的等腰直角三角形的斜边长度的一半的值
  calculateHalfHypotenuseLength (canvasWidth, canvasHeight) {
    const maxLength = Math.max(canvasWidth, canvasHeight)
    const hypotenuseLength = Math.round(Math.sqrt(maxLength * maxLength + maxLength * maxLength))
    return hypotenuseLength / 2
  }
  drawStars (arr) {
    let _this = this
    const bgImg = new window.Image()
    const ctx = _this.data.ctx
    bgImg.src = _this.data.backgroundImage
    bgImg.onload = () => {
      ctx.drawImage(bgImg, 0, 0)
      merge(_this.data, {
        timer: window.requestAnimationFrame(_this.drawStars.bind(_this, arr))
      })
      ctx.drawImage(bgImg, 0, 0)

      ctx.fillStyle = '#fff'
      ctx.font = '48px _sans'
      ctx.fillText(_this.data.title, _this.calculateXOffsetForCenteredText(_this.data.title), _this.data.canvasHeight / 2 + 12)
      for (let i = 1, len = arr.length; i < len; i++) {
        arr[i].draw()
      }
    }
  }
}
