import React from 'react'
import './Radio.css'

export default function Radio(props) {

    const handleRadioChange = (e) => {
        props.onChange(e.target.value)
    }

    return (
    <label>
        <input 
            type="radio" 
            name={props.name} 
            value={props.label} 
            className='real-radio' 
            onChange={handleRadioChange}
        />
        <span className='custom-radio'></span>
        {props.label}
    </label>
    )
}
