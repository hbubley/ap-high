import React from 'react'

export default function N(props) {
    return (
        <div className="results">
        <div className="p-title">
       <h1>Neuroticism</h1>
        <h3>{props.personalData}</h3>
        </div>
    </div>
    )
}
