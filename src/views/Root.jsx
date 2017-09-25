import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import AppLayout from './Applayout'

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="height-all">
      <Route path="/" component={AppLayout} />
      {
        process.env.NODE_ENV !== 'production' && <DevTools />
      }
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
