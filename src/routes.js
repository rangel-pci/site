import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>
                <Route exact path={"/grupo-zago"} component={() => {
                    window.location.replace('https://grupo-zago-me-contrata.rangelpereira.com/');
                    return null;
                }} />
                <Route path={"/:firstParam?"} component={Home} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;