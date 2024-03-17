import React, { useState } from 'react'
import './Card.css'

export default function Card(props) {

    const [isVisibleName, setIsVisibleName] = useState(false)
    const [isVisibleEmail, setIsVisibleEmail] = useState(false)

    return (
    <div className='card'>
        <img src={props.photo} alt={props.name} />
        <div className="name-block">
            <p 
                onMouseEnter={() => setIsVisibleName(true)} 
                onMouseLeave={() => setIsVisibleName(false)}
                className='name'
            >
                {props.name}
            </p>
            {isVisibleName && <div className='tooltip-text'>{props.name}</div>}
        </div>
        <p>{props.position}</p>
        <div className="email-block">
            <p 
                onMouseEnter={() => setIsVisibleEmail(true)} 
                onMouseLeave={() => setIsVisibleEmail(false)}
                className='email'
            >
                {props.email}
            </p>
            {isVisibleEmail && <div className='tooltip-text'>{props.email}</div>}
        </div>
        <p>{props.phone}</p>
    </div>
    )
}
