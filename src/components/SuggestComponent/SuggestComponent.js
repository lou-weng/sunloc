import React from 'react'
import SunlocLogo from '../SunlocLogoComponent/SunlocLogoComponent';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import './SuggestComponent.css'


export default function Suggest() {
    return (
        <Container className="">
            <SunlocLogo> </SunlocLogo>
            <p className="mb-0 text-left bodyText">make a suggestion:</p>
            <Form className="textInput">
                <Form.Control className="formField" placeholder="enter location" />
                <Form.Control className="my-3 mb-4 formField" placeholder="enter description" />
                <Form.File className="mt-3 selectionButton" id="submitFile"/>
            </Form>
            <Button className="mt-4 selectionButton" id="searchButton">suggest</Button>
        </Container>
    )
}