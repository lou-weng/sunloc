import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SunlocLogoComponent from '../SunlocLogoComponent/SunlocLogoComponent';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import './HomeComponent.css'


export default function Home() {
    return (
        <Container className="">
            <p className="mb-0 text-left bodyText">what do you want to experience today?</p>
            <Row>
                <Button className="m-3 mt-2 selectionButton" id="sunriseButton">sunrise</Button>
                <Button className="m-3 mt-2 selectionButton" id="sunsetButton">sunset</Button>
            </Row>
            <p className="text-left bodyText" id="locationText">where are you located?</p>
            <Form className="textInput">
                <Form.Control className="formField" placeholder="enter address" />
            </Form>
        </Container>
    )
}