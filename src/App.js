import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import HomeComponent from './components/HomeComponent/HomeComponent';
import SuggestComponent from './components/SuggestComponent/SuggestComponent';
import ResultsComponent from './components/ResultsComponent/ResultsComponent';
import SunlocLogoComponent from './components/SunlocLogoComponent/SunlocLogoComponent'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<Container fluid className="App d-flex align-items-center justify-content-center">
			<SunlocLogoComponent />
			<Container className="bg-transparent border-0">
				<Router>
					<nav className="container">
						<Row className="container">
							<Link to="/" className="pr-1 navigationLink"> home </Link>
							<p className="navigationLink">/</p>
							<Link to="/suggestaspot" className="pl-1 pr-1 navigationLink"> suggest a spot </Link>
							<p className="navigationLink">/</p>
							<Link to="/results" className="pl-1 navigationLink"> results </Link>
						</Row>
					</nav>
					<Switch>
						<Route path="/suggestaspot">
							<SuggestComponent />
						</Route>
						<Route path="/results">
							<ResultsComponent />
						</Route>
						<Route path="/">
							<HomeComponent />
						</Route>
					</Switch>
				</Router>
			</Container>
		</Container>
	);
}

export default App;
