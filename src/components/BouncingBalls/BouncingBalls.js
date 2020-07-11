import React, { useState } from 'react'
import './BouncingBalls.scss'

export default function BouncingBalls(props) {
    const [ totalBounces, setTotalBounces ] = useState(0);

    const movement = { ball: { 'animation-name': 'none' }}

    if (props.move) {
        movement.ball = { 'animation-name': 'ballMovement' };
    }

    return (
        <div className="ballContainer" >
            <div className="ball" id="ball_1" style={movement.ball}/>
            <div className="ball" id="ball_2" style={movement.ball}/>
            <div className="ball" id="ball_3" style={movement.ball}/>
        </div>
    )
}
