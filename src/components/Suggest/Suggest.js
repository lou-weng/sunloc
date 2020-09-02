import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SunlocLogo from '../SunlocLogo/SunlocLogo';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import './Suggest.css'


export default function Suggest() {
    return (
        <Container className="text-left suggestScreen">
            <SunlocLogo> </SunlocLogo>
            <p className="mb-0 text-left bodyText">make a suggestion:</p>
            <Form className="textInput">
                <Col xs={10}>
                    <Form.Control className="pl-0 m-0 formField" placeholder="enter location" />
                </Col>
            </Form>
            <Form className="textInput">
                <Col xs={10}>
                    <Form.Control className="pl-0 m-0 formField" placeholder="enter description" />
                </Col>
            </Form>
            <Form>
                <Form.Group>
                    <Form.File className="mt-3 ml-3 selectionButton" id="submitFile"/>
                </Form.Group>
            </Form>
            <Button className="m-3 mt-4 selectionButton" id="searchButton">suggest</Button>
        </Container>
    )
}