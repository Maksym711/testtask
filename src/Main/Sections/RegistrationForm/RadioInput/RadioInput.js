import React from 'react'
import './RadioInput.css'
import Radio from '../../../../components/Radio'

export default function RadioInput(props) {
    return (
    <div className="radio-input">
        <h4>Select your position</h4>
        <Radio name='position' label='Frontend developer' onChange={props.onChange} />
        <Radio name='position' label='Backend developer' onChange={props.onChange} />
        <Radio name='position' label='Designer' onChange={props.onChange} />
        <Radio name='position' label='QA' onChange={props.onChange} />
        {props.error && <p className='error-input'>make a choice</p>}
    </div>
    )
}
