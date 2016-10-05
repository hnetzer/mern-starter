/* eslint-disable global-require */
import React from 'react'
import { Route } from 'react-router'
import App from './modules/App/App'

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require)
  }
}

export default (
  <Route path="/" component={App} />
)
