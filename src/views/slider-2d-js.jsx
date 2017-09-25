import React, { Component } from 'react'
// import uuid from 'node-uuid'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

class Slider2DJS extends Component {
  constructor (props) {
    super(props)
    this.state = {
      timer: null,
      curIndex: 0,
      images16: props.images16
    }
  }

  static propTypes = {
    images16: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.startInterval()
  }
  componentWillUnmount () {
    this.stopInterval()
  }
  render () {
    const lis1 = this.state.images16.map((item, idx) => {
      return (
        <li
          className="photo"
          // key={uuid.v4()}
          key={idx}
          style={{
            display: this.isCurIndexPicture(item.url) ? 'block' : 'none'
          }}>
          <img className="photo-img" src={item.url} alt={item.title} />
        </li>
      )
    })
    const lis2 = this.state.images16.map((item, idx) => {
      // 如果不用括号的话，'point' + this.isCurIndexPicture(item.url)整体会作为一个表达式
      // todo: 这里的动画失效了，可能原因是footer父节点节点都被重新渲染了
      return (
        <div
          // key={uuid.v4()}
          key={idx}
          className={classnames({
            'point': true,
            'scale': this.isCurIndexPicture(item.url)
          })}
          style={{
            backgroundImage: `url(${item.url})`
          }}
          onMouseEnter={() => this.showPic(idx)}></div>
      )
    })
    return (
      <div className="slider-2d-js">
        <section onMouseEnter={this.stopInterval.bind(this)} onMouseLeave={this.startInterval.bind(this)} className="gallery">
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
    if (this.state.timer) {
      clearInterval(this.state.timer)
    }
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
  // ES7 property initializer, used here only for reference how to pass parameter
  // personally, I use bind method to bind this
  showPic = picIndex => {
    this.setState({
      curIndex: picIndex
    })
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    images16: state.images.images16
  }
}

export default withRouter(connect(mapStateToProps, {})(Slider2DJS))
