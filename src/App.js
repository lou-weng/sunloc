import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SunlocLogo from './components/SunlocLogo/SunlocLogo';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



function App() {
	return (
		<div className="App">
			<header className="App-header">
				<SunlocLogo> </SunlocLogo>
				<p className="bodyText">what do you want to experience today?</p>
				<Button className="selectionButton" id="sunriseButton">sunrise</Button>
				<Button className="selectionButton" id="sunsetButton">sunset</Button>
				<p className="bodyText" id="locationText">where are you located?</p>
				<Form className="textInput">
					<Form.Control placeholder="enter address" />
				</Form>
			</header>
		</div>
	);
}

export default App;
