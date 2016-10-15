import React from 'react'
import uuid from 'node-uuid'
import $ from 'jquery'

export default class slider3dJs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: null,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      images24: [
        {
          url: './static/img/near_1200x800/01.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/02.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/03.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/04.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/05.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/06.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/07.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/08.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/09.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/10.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/11.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/12.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/13.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/14.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/15.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/16.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/01.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/02.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/03.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/04.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/05.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/06.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/07.jpg',
          title: ''
        },
        {
          url: './static/img/near_1200x800/08.jpg',
          title: ''
        }
      ]
    }
  }
  componentWillUnmount () {
    this.stopInterval()
  }
  render () {
    let newImages24 = []
    for (let i = 0; i < 6; i++) {
      newImages24.push([
        this.state.images24[4 * i],
        this.state.images24[4 * i + 1],
        this.state.images24[4 * i + 2],
        this.state.images24[4 * i + 3]
      ])
    }
    const lis = newImages24.map(group => {
      return (
        <li className="stage-cover" key={uuid.v4()}>
          <ul onMouseMove={this.startInterval.bind(this)} onMouseLeave={this.stopInterval.bind(this)} className="container-cover">
            {group.map(pic => {
              return (
                <li className="stage-pic" key={uuid.v4()}>
                  <div className="container-pic">
                    <img src={pic.url} alt={pic.title} className="img"/>
                  </div>
                </li>
              )
            })}
          </ul>
        </li>
      )
    })
    return (
      <div className="slider-3d-js">
        <div className="slider">
          {/* stage for 六面体整体 */}
          <div className="stage-whole">
            <ul className="container-whole">{lis}</ul>
          </div>
        </div>
        <aside className="controls">
          <ul className="ul">
            <li className="li">
              <label htmlFor="rotateX" className="label">RotateX</label>
              <input onChange={this.rotate.bind(this, 'rotateX')} type="number" id="rotateX" className="input" value={this.state.rotateX} />
            </li>
            <li className="li">
              <label htmlFor="rotateY" className="label">RotateY</label>
              <input onChange={this.rotate.bind(this, 'rotateY')} type="number" id="rotateY" className="input" value={this.state.rotateY} />
            </li>
            <li className="li">
              <label htmlFor="rotateZ" className="label">RotateZ</label>
              <input onChange={this.rotate.bind(this, 'rotateZ')} type="number" id="rotateZ" className="input" value={this.state.rotateZ} />
            </li>
          </ul>
        </aside>
      </div>
    )
  }
  rotate (clue, e) {
    this.setState({
      [clue]: (e.target || e.srcElement).value
    }, () => {
      $('.container-whole').css({
        transform: `rotateX(${this.state.rotateX}deg) rotateY(${this.state.rotateY}deg) rotateZ(${this.state.rotateZ}deg)`
      })
    })
  }
  startInterval (e) {
    // 如果去掉e.persist()，程序会报错的
    e.persist()
    let w = $(e.target).width()
    let h = $(e.target).height()
    // this.setState({timer: setInterval(() => {
    //   // bug: 宽度值变了
    //   // console.log($(e.target).width())
    //   this.cool(e, w, h)
    // }, 600)})
    this.cool(e, w, h)
  }
  stopInterval () {
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }
  }
  getMousePosition = e => {
    return {
      x: e.pageX || e.clientX + document.body.scrollLeft,
      y: e.pageY || e.clientY + document.body.scrollTop
    }
  }
  transform = (transformString/* e.g. "rotateX(0deg) rotateY(0deg) rotateZ(0deg)" */) => {
    $('.container-whole').css({
      transform: transformString
    })
  }
  startTransform = (direction, degree) => {
    console.log(direction)
    degree = parseInt(degree)
    let transformString = $('.container-whole').get(0).style.webkitTransform || 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
    // 度数可为负值，判断正则的时候需要注意
    let rotateX = parseInt(transformString.replace(/^rotateX\((-?\d*)deg\).*$/, '$1'))
    let rotateY = parseInt(transformString.replace(/^.*rotateY\((-?\d*)deg\).*$/, '$1'))
    let rotateZ = parseInt(transformString.replace(/^.*rotateZ\((-?\d*)deg\).*$/, '$1'))
    this.setState({
      rotateX,
      rotateY,
      rotateZ
    })
    switch (direction) {
      case 'up':
        transformString = `rotateX(${rotateX + degree}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        break
      case 'down':
        transformString = `rotateX(${rotateX - degree}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        break
      case 'right':
        transformString = `rotateX(${rotateX}deg) rotateY(${rotateY + degree}deg) rotateZ(${rotateZ}deg)`
        break
      case 'left':
        transformString = `rotateX(${rotateX}deg) rotateY(${rotateY - degree}deg) rotateZ(${rotateZ}deg)`
        break
      case 'scroll':
      default:
        transformString = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ + degree}deg)`
        break
    }
    this.transform(transformString)
  }
  cool = (e, containerW, containerH) => {
    // 说明：以可视区左上角为坐标原点，向左为y轴正方向，向上为x轴正方向
    // 因此整个网页可视区的横纵左边均为负值
    // get current container-cover
    let $targetElement = $(e.target || e.srcElement)
    // get original mouse pointer offset
    let mousePosition = this.getMousePosition(e)
    let mX = mousePosition.x
    let mY = mousePosition.y
    // get container-cover left top offset, width and height
    let containerX = $targetElement.offset().left
    let containerY = $targetElement.offset().top
    // let containerW = $targetElement.width()
    // let containerH = $targetElement.height()
    // get mouse pointer position relative to container left top point
    mX = mX - containerX
    mY = mY - containerY
    // 以过container-cover中心点，连接该正方形四角的x形线条作为依据来判断鼠标点击的方向是上下左右中的哪个
    // 上升线段方程：y=(containerH / containerW)x - containerH
    // 下降线段方程：y=(0-containerH/containerW)x
    function getCompareY (x) {
      x = parseInt(x)
      return {
        yUp: (containerH / containerW) * x - containerH,
        yDown: -(containerH / containerW) * x
      }
    }
    // 获取上升、下降线段的y值
    let compareUpY = getCompareY(mX).yUp
    let compareDownY = getCompareY(mX).yDown
    let distanceFromCentralCircle = parseInt(Math.sqrt(Math.pow(mX - 0.5 * containerW, 2) + Math.pow(mY + 0.5 * containerH, 2)))
    let degreeStep = 1
    if (distanceFromCentralCircle < 80) {
      // 鼠标在中间半径80的圆形区域内时为rotateY形式的旋转
      // scroll by changing value of transform rotateY
      this.startTransform('scroll', degreeStep)
    } else if (mY > compareUpY) {
      if (mY > compareDownY) {
        // rotate up
        this.startTransform('up', degreeStep)
      } else {
        // rotate left
        this.startTransform('left', degreeStep)
      }
    } else {
      if (mY > compareDownY) {
        // rotate right
        this.startTransform('right', degreeStep)
      } else {
        // rotate down
        this.startTransform('down', degreeStep)
      }
    }
  }
}
