import React from 'react'
import uuid from 'node-uuid'

export default class appHeader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: null,
      curIndex: 0,
      images16: [
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
        }
      ]
    }
  }
  componentDidMount () {
    this.startInterval()
  }
  render () {
    const lis1 = this.state.images16.map(item => {
      return (
        <li className="photo" key={uuid.v4()} style={{
          display: this.isCurIndexPicture(item.url) ? 'block' : 'none'
        }} onMouseEnter={this.stopInterval.bind(this)} onMouseLeave={this.startInterval.bind(this)}>
          <img className="photo-img" src={item.url} alt={item.title} />
        </li>
      )
    })
    const lis2 = this.state.images16.map((item, idx) => {
      // 如果不用括号的话，'point' + this.isCurIndexPicture(item.url)整体会作为一个表达式
      return (
        <div
          key={uuid.v4()}
          className={'point' + (this.isCurIndexPicture(item.url) ? ' scale' : '')}
          style={{
            backgroundImage: `url(${item.url})`
          }}
          onMouseOver={this.showPic.bind(this, idx)}></div>
      )
    })
    return (
      <div className="slider-2d-js">
        <section className="gallery">
          <ul className="photos">{lis1}</ul>
          <aside onClick={this.showPrevPic.bind(this)} className="arr arr-left"><i className="fa fa-chevron-left"></i></aside>
          <aside onClick={this.showNextPic.bind(this)} className="arr arr-right"><i className="fa fa-chevron-right"></i></aside>
          <footer className="points">{lis2}</footer>
        </section>
      </div>
    )
  }

  isCurIndexPicture (picUrl) {
    const picIndex = picUrl.match(/\/(\d*)\.jpg/)[0].replace(/\/(\d*)\.jpg/, '$1')
    return parseInt(picIndex) === parseInt(this.state.curIndex) + 1
  }
  startInterval () {
    this.setState({timer: setInterval(() => {
      this.showNextPic()
    }, 2000)})
  }
  stopInterval () {
    clearInterval(this.state.timer)
  }
  showPrevPic () {
    if (this.state.curIndex === 0) {
      this.setState({curIndex: this.state.images16.length - 1})
    } else {
      this.setState({curIndex: this.state.curIndex - 1})
    }
  }
  showNextPic () {
    if (this.state.curIndex === this.state.images16.length - 1) {
      this.setState({curIndex: 0})
    } else {
      this.setState({curIndex: this.state.curIndex + 1})
    }
  }
  showPic (picIndex) {
    console.log(picIndex)
    this.setState({
      curIndex: picIndex
    })
  }
  test = () => {
    console.log('dddd')
  }
}
