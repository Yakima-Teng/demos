import React from 'react'
import {render} from 'react-dom'
import './styles/importer.less'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'
import AppHeader from './components/app-header.jsx'
import AppSnows from './components/app-snows.jsx'
import AppLoading from './components/app-loading.jsx'
import Slider2dJs from './views/slider-2d-js.jsx'
import Slider3dCss from './views/slider-3d-css.jsx'
import Slider3dJs from './views/slider-3d-js.jsx'
import Note from './views/note.jsx'
import Rainbow from './views/rainbow.jsx'
import Particles from './views/particles.jsx'

/**
 * *********************************************************************************
 *                                                                                  *
 * Components must be uppercase
 * regular DOM is lowercase
 *                                                                                  *
 ***********************************************************************************/
class AppLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="app-wrapper">
        <AppHeader />
        <div className="app-content">
          {this.props.children}
        </div>
        <AppSnows />
        <AppLoading />
      </div>
    )
  }
}

const routes = (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Slider3dCss} />
    <Route
      path="/slider-2d-js"
      component={Slider2dJs}
    />
    <Route
      path="/slider-3d-css"
      component={Slider3dCss}
    />
    <Route
      path="/slider-3d-js"
      component={Slider3dJs}
    />
    <Route
      path="/rainbow"
      component={Rainbow}
    />
    <Route
      path="/particles"
      component={Particles}
    />
    <Route
      path="/note"
      component={Note}
    />
    <Route
      path="*"
      component={Slider2dJs}
    />
  </Route>
)
render(
  <Router history={hashHistory}>{routes}</Router>, document.getElementById('app')
);

/**
 * *********************************************************************************
 *                                                                                  *
 * enable requestAnimationFrame method and corresponding cancel method
 * 参考地址：
 * http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/
 * 原文多了一些没用的东西，比如回调函数里传了个莫名其妙的时间参数，
 * 比如自定义requestAnimationFrame函数时多加了一个element参数
 *                                                                                  *
 ***********************************************************************************/
(function () {
  let lastTime = 0
  const vendors = ['webkit', 'moz']
  for (let i = 0, length = vendors.length; i < length && !window.requestAnimationFrame; i++) {
    window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame']
    // webkit中cancel方法的名称跟其他的不一样
    window.cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame']
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (cb) {
      const curTime = +new Date()
      const timeToCall = Math.max(0, 16.7 - (curTime - lastTime))
      const id = window.setTimeout(function () {
        cb()
      }, timeToCall)
      lastTime = curTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
})()
