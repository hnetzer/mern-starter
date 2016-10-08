/* eslint-disable global-require */
import React from 'react'
import { Route } from 'react-router'
import App from './modules/App/App'
import Counter from './modules/Counter/Counter'

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require)
  }
}

export default (
  <Route>
    <Route path="/" component={App} />
    <Route path="/count" component={Counter} />
  </Route>
)
