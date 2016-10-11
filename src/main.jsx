import React from 'react'
import ReactDom from 'react-dom'
import './styles/importer.less'
import {Router, Route, hashHistory} from 'react-router'
import AppHeader from './components/app-header.jsx'
import AppFooter from './components/app-footer.jsx'
import AppSnows from './components/app-snows.jsx'
import AppLoading from './components/app-loading.jsx'
import Slider2dJs from './views/slider-2d-js.jsx'
import Slider3dCss from './views/slider-3d-css.jsx'
import Slider3dJs from './views/slider-3d-js.jsx'

/**
 * *********************************************************************************
 *                                                                                  *
 * Componenets must be uppercase
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
        <AppFooter />
        <AppSnows />
        <AppLoading />
      </div>
    )
  }
}

const routes = (
  <Route path="/" component={AppLayout}>
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
      path="*"
      component={Slider3dJs}
    />
  </Route>
)
ReactDom.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'))