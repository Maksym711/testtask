import React from 'react'
import './RadioInput.css'
import Radio from '../../../../components/Radio'

export default function RadioInput(props) {

    if(props.error && props.selectedPosition.length > 0){
        props.setErrorRadioInput(false)
    }

    return (
    <div className="radio-input">
        <h4>Select your position</h4>
        <Radio 
            name='position' 
            label='Frontend developer' 
            setSelectedPosition={props.setSelectedPosition}
            error={props.selectedPosition.length === 0 ? props.error : undefined}
        />
        <Radio 
            name='position' 
            label='Backend developer' 
            setSelectedPosition={props.setSelectedPosition} 
            error={props.selectedPosition.length === 0 ? props.error : undefined} 
        />
        <Radio 
            name='position' 
            label='Designer' 
            setSelectedPosition={props.setSelectedPosition} 
            error={props.selectedPosition.length === 0 ? props.error : undefined}
        />
        <Radio 
            name='position' 
            label='QA' 
            setSelectedPosition={props.setSelectedPosition} 
            error={props.selectedPosition.length === 0 ? props.error : undefined} 
        />
    </div>
    )
}
