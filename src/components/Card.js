import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
    <div className='card'>
        <img src={props.photo} alt={props.name} />
        <p className='name'>{props.name}</p>
        <p>{props.position}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
    </div>
    )
}
