import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Bins } from '../imports/collections/bins'

import App from './components/app'
import BinsMain from './components/bins/bins_main'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <Route path="bins" components={BinsMain} />
        </Route>
    </Router>
)

Meteor.startup( () => {
    ReactDOM.render(routes, document.querySelector('.render-target'))
})