import React from 'react'
import { merge } from '../scripts/utils.js'

class Particle {
  constructor (offsetX, offsetY, rgba) {
    this.x = offsetX
    this.y = offsetY
    this.rgba = rgba
    this.vectorX = (Math.random() - 0.5) * 4
    this.vectorY = - 5 + (Math.random() - 0.5) * 2
    this.gravity = 0.1
  }

  getX () {
    this.x += this.vectorX
    return this.x
  }
  getY () {
    this.gravity -= 0.01
    this.vectorY += this.gravity
    this.y += this.vectorY

    if (this.gravity < 0) {
      this.gravity = 0.1
    }

    return this.y
  }
  getRadius () {
    return 2
  }
}

export default class Particles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.data = {
      canvas: null,
      ctx: null,
      alpha: 0.6,
      width: window.innerWidth,
      height: window.innerHeight,
      dpr: window.devicePixelRatio || 1,
      timer: null,
      animationId: null,
      particles: []
    }

    window.data = this.data
  }

  componentDidMount () {
    this.init()
  }
  componentWillUnmount () {
    if (this.data.timer) {
      clearInterval(this.data.timer)
    }
    if (this.data.animationId) {
      window.cancelAnimationFrame(this.data.animationId)
    }
  }
  render () {
    return (
      <div className="particles">
        <canvas className="canvas" ref="particlesCanvas" width="500" height="300">
          Your browser does not support HTML5 Canvas API
        </canvas>
      </div>
    )
  }

  init () {
    if (!document.createElement('canvas').getContext) {
      return
    }
    const canvas = this.refs.particlesCanvas
    canvas.width = this.data.width * this.data.dpr
    canvas.height = this.data.height * this.data.dpr

    const ctx = canvas.getContext('2d')
    ctx.scale(this.data.dpr, this.data.dpr)
    ctx.globalAlpha = this.data.alpha

    merge(this.data, {
      canvas,
      ctx
    })

    this.downloadImage()
  }
  downloadImage () {
    let img = new Image()
    img.src = require('../assets/pikaqiu.png')

    img.onload = () => {
      const maxLength = Math.max(this.data.width, this.data.height)
      const printWidth = maxLength * 0.3
      // 335/370是该图片的宽高比
      const printHeight = printWidth * 335 / 370
      // 让绘制到canvas上的图片位于中间位置，所需给图片左上角设定的起始坐标
      const printX = (this.data.width - printWidth) / 2
      const printY = (this.data.height - printHeight) / 2

      let c = this.data.ctx
      c.drawImage(img, 0, 0, img.width, img.height, printX, printY, printWidth, printHeight)
      const canvasData = c.getImageData(0, 0, this.data.width, this.data.height)

      setTimeout(this.collectParticles.bind(this, canvasData), 300)
      merge(this.data, {
        timer: setInterval(this.collectParticles.bind(this, canvasData), 6000)
      })
    }
  }
  collectParticles (canvasData) {
    let particles = []
    const data = canvasData.data
    let idxInDataArr = 0

    for (let i = 0; i < canvasData.width; i += 6) {
      for (let j = 0; j < canvasData.height; j += 6) {
        // 计算(i, j)坐标上的像素点对应的RGBA值中R值在data数组中的索引
        idxInDataArr = (j * canvasData.width + i) * 4
        // 判断透明度alpha值是否符合要求
        if (data[idxInDataArr + 3] > 50) {
          const r = data[idxInDataArr]
          const g = data[idxInDataArr + 1]
          const b = data[idxInDataArr + 2]
          const a = data[idxInDataArr + 3]
          const offsetX = i
          const offsetY = j
          const rgba = `rgba(${r}, ${g}, ${b}, ${a})`
          particles.push(new Particle(offsetX / this.data.dpr, offsetY / this.data.dpr, rgba))
        }
      }
    }

    merge(this.data, {
      particles
    })

    void function loop () {
      this.draw()
      merge(this.data, {
        animationId: window.requestAnimationFrame(loop.bind(this))
      })
    }.call(this)

    //不清除掉animationId的话，因为requestAnimationFrame被不停调用，且collectParticles方法也是周期性调用，会导致没重复几次collectParticles方法页面就很卡了
    setTimeout(() => {
      window.cancelAnimationFrame(this.data.animationId)
    }, 6000)
  }
  draw () {
    const particles = this.data.particles
    const c = this.data.ctx

    c.clearRect(0, 0, this.data.width, this.data.height)

    for (let i = 0, len = particles.length; i < len; i++) {
      const curParticle = particles[i]
      c.save()
      c.beginPath()
      c.arc(curParticle.getX(), curParticle.getY(), curParticle.getRadius(), 0, Math.PI * 2)
      c.fillStyle = curParticle.rgba
      c.fill()
      c.restore()
    }
  }
}
