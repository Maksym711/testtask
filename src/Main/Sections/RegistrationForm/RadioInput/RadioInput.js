import React, { useEffect, useState } from 'react'
import './RadioInput.css'
import Radio from '../../../../components/Radio'

export default function RadioInput(props) {

    const [positions, setPositions] = useState([])
    const [selectedPosition, setSelectedPosition] = useState('')

    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
          .then(response => response.json())
          .then(data => setPositions(data.positions))
          .catch(error => alert(error))
      }, [])
    
      useEffect(() => {
        const position = positions.find(pos => pos.name === selectedPosition);
        if (position) {
          props.setSelectedPositionId(position.id)
        }
      }, [selectedPosition, positions])

    if(props.error && selectedPosition.length > 0){
        props.setErrorRadioInput(false)
    }

    return (
    <div className="radio-input">
        <h4>Select your position</h4>
        {positions.map(item => 
            <Radio 
                key={item.id}
                name='position' 
                label={item.name} 
                setSelectedPosition={setSelectedPosition}
                error={selectedPosition.length === 0 ? props.error : undefined}
            />
        )}
    </div>
    )
}
