import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import SunlocLogo from '../SunlocLogo/SunlocLogo';
import ResultsCard from '../ResultsCard/ResultsCard';
import Container from 'react-bootstrap/Container';


import './Results.css'
import { CardDeck } from 'react-bootstrap';


export default function Results() {
    return (
        <Container>
            <SunlocLogo> </SunlocLogo>
            <p className="mb-0 text-left bodyText">we recommend checking out:</p>
            <CardDeck>
                <ResultsCard></ResultsCard>
                <ResultsCard></ResultsCard>
                <ResultsCard></ResultsCard>
            </CardDeck>
        </Container>
    )
}