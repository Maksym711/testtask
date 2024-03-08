import React, { useState } from 'react'
import './Input.css'

export default function Input(props) {

    const [onFocus, setOnFocus] = useState(false)

    const classesInput = ['input']
    const classesLabel = ['label']

    if(onFocus || props.value.length > 0){
        classesLabel.push('on-focus')
    }
    if(props.error){
        classesInput.push('error')
        classesLabel.push('error')
    }

    return (
    <div className='input-block'>
        <label className={classesLabel.join(' ')}>
            {props.label}
        </label>
        <input 
            className={classesInput.join(' ')}
            type={props.type} 
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onFocus={(e) => {
                setOnFocus(true);
                if(props.onFocus){
                    props.onFocus(e)
                }
            }}
            onBlur={() => setOnFocus(false)}
            maxLength={props.maxLength}
            onKeyPress={props.onKeyPress}
        />
        <p className={props.error ? 'helper-text error' : 'helper-text'}>{props.errorText}</p>
    </div>
    )
}
