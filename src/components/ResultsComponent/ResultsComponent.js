import React from 'react'
import SunlocLogo from '../SunlocLogoComponent/SunlocLogoComponent';
import ResultsCard from '../ResultsCardComponent/ResultsCardComponent';
import Container from 'react-bootstrap/Container';


import './ResultsComponent.css'
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