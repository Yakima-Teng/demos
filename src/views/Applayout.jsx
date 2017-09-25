import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import AppHeader from '../components/app-header.jsx'
import AppSnows from '../components/app-snows.jsx'
import AppLoading from '../components/app-loading.jsx'
import Slider2dJs from '../views/slider-2d-js.jsx'
import Slider3dCss from '../views/slider-3d-css.jsx'
import Slider3dJs from '../views/slider-3d-js.jsx'
import Note from '../views/note.jsx'
import Rainbow from '../views/rainbow.jsx'
import Particles from '../views/particles.jsx'
import Cards from '../views/cards.jsx'
import Stars from '../views/stars.jsx'

export default class AppLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="app-wrapper">
        <AppHeader />
        <div className="app-content">
          <Route path="/" exact component={Slider3dCss} />
          <Route path="/slider-2d-js" component={Slider2dJs} />
          <Route path="/slider-3d-css" component={Slider3dCss} />
          <Route path="/slider-3d-js" component={Slider3dJs} />
          <Route path="/rainbow" component={Rainbow} />
          <Route path="/particles" component={Particles} />
          <Route path="/note" component={Note} />
          <Route path="/cards" component={Cards} />
          <Route path="/stars" component={Stars} />
          {/*<Route path="*" component={Slider3dCss} />*/}
        </div>
        <AppSnows />
        <AppLoading />
      </div>
    )
  }
}
