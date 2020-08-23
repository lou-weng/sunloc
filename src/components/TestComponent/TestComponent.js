import React from 'react'

import './TestComponent.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default function TestComponent() {
    return(
        <Jumbotron>
            <h1 className="">Hello World</h1>
            <Button>Hello</Button>
        </Jumbotron>
    )
}

// export default class TestComponent extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {

//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>{ this.props.text }</h1>
//                 <h1>{ this.props.number }</h1>
//             </div>
//         )
//     }
// }