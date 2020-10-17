import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SunlocLogo from '../SunlocLogo/SunlocLogo';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import './Home.css'


export default function Home() {
    return (
        <Container>
            <SunlocLogo> </SunlocLogo>
            <p className="mb-0 text-left bodyText">what do you want to experience today?</p>
            <Form className="textInput" method="post" action="localhost:3001/">
                <Row>
                    <Button className="m-3 mt-2 selectionButton" id="sunriseButton">sunrise</Button>
                    <Button className="m-3 mt-2 selectionButton" id="sunsetButton">sunset</Button>
                </Row>
                <p className="text-left bodyText" id="locationText">where are you located?</p>
                <Col xs={10}>
                    <Form.Control type="text" name="location" className="pl-0 m-0 formField" placeholder="enter address" />
                </Col>
                <Row>
                    <Button type="submit" className="m-3 mt-4 selectionButton" id="searchButton">show me the light</Button>
                </Row>
            </Form>
        </Container>
    )
}