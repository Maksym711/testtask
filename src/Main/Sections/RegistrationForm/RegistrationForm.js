import React, { useState } from 'react'
import './RegistrationForm.css'
import TextInput from './TextInput/TextInput'
import RadioInput from './RadioInput/RadioInput'
import Button from '../../../components/Button'

export default function RegistrationForm() {

    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [selectedPosition, setSelectedPosition] = useState('')
    const [error, setError] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        if(valueName.length < 5 || valueEmail.length < 10 || valuePhone.length < 13 || selectedPosition.length === 0){
            setError(true)
        }
    }

    console.log(selectedPosition)

    return (
    <section className='registration-form'>
        <h1>Working with POST request</h1>
        <form>
            <TextInput 
                error={error}
                values={{ valueName, valueEmail, valuePhone }}
                setValues={{ setValueName, setValueEmail, setValuePhone }}
            />
            <RadioInput 
                onChange={setSelectedPosition}
                error={error}
             />
            <Button backgroundColor={error ? '#B4B4B4' : '#F4E041'} backgroundHover={error ? undefined : '#FFE302'} color={error ? '#FFFFFF' : 'black'} small onClick={handleClick}>
                Sign up
            </Button>
        </form>
    </section>
    )
}
