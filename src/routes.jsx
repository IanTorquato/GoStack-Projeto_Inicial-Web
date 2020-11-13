import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import Repository from './pages/Repository'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Main} path="/" exact />
				<Route component={Repository} path="/repository/:repository" />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes