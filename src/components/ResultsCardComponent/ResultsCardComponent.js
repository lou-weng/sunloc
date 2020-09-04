import React from 'react'
import Card from 'react-bootstrap/Card'
import polsonpier from '../../images/polsonpier.jpg'

import './ResultsCardComponent.css'


export default function ResultsCard() {
    return (
        <Card className="cardStyling mt-3">
            <Card.Img className="cardImage" variant="top" src={polsonpier} />
            <Card.Body>
                <Card.Title className="cardTitle">Polson Pier</Card.Title>
                <Card.Text className="bodyTextCard">
                Polson Pier, previously known as The Docks Waterfront Entertainment Complex 
                (or simply The Docks), is a multi-purpose entertainment complex in Toronto, 
                Ontario, Canada. It is located in the largely industrial Port Lands area of 
                the city along the waterfront of Toronto Harbour.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="cardFooter">13.2 km</small>
            </Card.Footer>
        </Card>
    )
}