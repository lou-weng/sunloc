import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Suggest from './components/Suggest/Suggest';
import Results from './components/Results/Results';
import Row from 'react-bootstrap/Row'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";



function App() {
	return (
		<div className="App">
			<header className="justify-content-center App-header">
				<Router>
					<div>
						<nav>
							<Row>
								<Link to="/" className="pr-1 navigationLink"> home </Link>
								<p className="navigationLink">/</p>
								<Link to="/suggestaspot" className="pl-1 pr-1 navigationLink"> suggest a spot </Link>
								<p className="navigationLink">/</p>
								<Link to="/results" className="pl-1 navigationLink"> results </Link>
							</Row>
						</nav>
						<Switch>
							<Route path="/suggestaspot">
								<Suggest />
							</Route>
							<Route path="/results">
								<Results />
							</Route>
							<Route path="/">
								<Home />
							</Route>
						</Switch>
					</div>
				</Router>
			</header>
		</div>
	);
}

export default App;
