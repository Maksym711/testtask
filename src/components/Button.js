import React from 'react'
import './Button.css'

export default function Button(props) {

    const classes = []

    if(props.big){
        classes.push('big')
    }
    if(props.small){
        classes.push('small')
    }

    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = props.backgroundHover
    }

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = props.backgroundColor
    }

    return (
        <button 
            style={{backgroundColor: props.backgroundColor, color: props.color}} 
            className={classes.join(' ')}
            onClick={props.onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {props.children}
        </button>
    )
}
