import React from 'react'
import { merge } from '../scripts/utils.js'

export default class rainbow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    // 注意：下面这些数据不要绑定到this.state上，因为通过this.setState更新this.state的数据并不是立即生效的
    // 这些数据自身的改动并不会引起DOM的改变
    this.data = {
      canvas: null,
      ctx: null,
      timer: null,
      times: 0,
      limit: 500,
      alpha: 0.6,
      size: 80,
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: window.devicePixelRatio || 1,
      r: 0,
      points: null
    }
  }

  componentDidMount () {
    this.init()
  }
  componentWillUnmount () {
    if (this.data.timer) {
      clearTimeout(this.data.timer)
    }
  }
  render () {
    return (
      <div className="rainbow">
        <canvas className="canvas" ref="rainbowCanvas" width="500" height="300">
          Your browser does not support HTML5 Canvas API
        </canvas>
      </div>
    )
  }

  init () {
    if (!document.createElement('canvas').getContext) {
      return
    }
    let canvas = this.refs.rainbowCanvas
    canvas.width = this.data.width * this.data.dpr
    canvas.height = this.data.height * this.data.dpr

    let ctx = canvas.getContext('2d')
    ctx.scale(this.data.dpr, this.data.dpr)
    ctx.globalAlpha = this.data.alpha

    // this.setState({
    //   canvas,
    //   ctx
    // })
    merge(this.data, {
      canvas,
      ctx
    })

    this.renderLoop()
  }
  renderLoop () {
    this.redraw()
    merge(this.data, { times: this.data.times + 1 })

    if (this.data.times < this.data.limit) {
      merge(this.data, {
        timer: setTimeout(this.renderLoop.bind(this), 1000)
      })
    } else {
      console.log(`Finished ${this.data.limit} times.`)
    }
  }
  redraw () {
    this.data.ctx.clearRect(0, 0, this.data.width, this.data.height)

    merge(this.data, {
      points: [
        { x: 0, y: this.data.height * 0.7 + this.data.size },
        { x: 0, y: this.data.height * 0.7 - this.data.size }
      ]
    })

    while (this.data.points[1].x < this.data.width + this.data.size) {
      this.draw(this.data.points[0], this.data.points[1])
    }
  }
  draw (p0, p1) {
    const cos = Math.cos
    const PI = Math.PI
    const rand = Math.random

    let c = this.data.ctx
    c.beginPath()
    c.moveTo(p0.x, p0.y)
    c.lineTo(p1.x, p1.y)

    const p2 = {
      x: p1.x + (rand() * 2 - 0.25) * this.data.size,
      y: this.line(p1.y)
    }

    c.lineTo(p2.x, p2.y)
    c.closePath()

    const r = this.data.r - PI * 2 / -50

    // 一脸懵逼
    c.fillStyle = '#' + (cos(r) * 127 + 128 << 16 | cos(r + PI * 2 / 3) * 127 + 128 << 8 | cos(r + PI * 2 / 3 * 2) * 127 + 128).toString(16)
    c.fill()

    merge(this.data, {
      r,
      points: [
        { x: this.data.points[1].x, y: this.data.points[1].y },
        { x: p2.x, y: p2.y }
      ]
    })
  }
  line (y) {
    const t = y + (Math.random() * 2 - 1.1) * this.data.size
    return (t > this.data.height || t < 0) ? this.line(y) : t
  }
}
