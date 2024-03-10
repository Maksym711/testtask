import React, { useEffect, useState } from 'react'
import './RegistrationForm.css'
import TextInput from './TextInput/TextInput'
import RadioInput from './RadioInput/RadioInput'
import UploadImage from './UploadImage/UploadImage'
import Button from '../../../components/Button'


export default function RegistrationForm() {

    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [imageName, setImageName] = useState('')
    const [selectedPosition, setSelectedPosition] = useState('')
    const [isErrorTextInput, setErrorTextInput] = useState(false)
    const [isErrorRadioInput, setErrorRadioInput] = useState(false)
    const [isErrorUploadImage, setErrorUploadImage] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        if(valueName.length < 2 || (valueEmail.length < 10 || !valueEmail.includes('@') || valueEmail.indexOf('@') + 6 > valueEmail.length || valueEmail.indexOf('@') === 0) || valuePhone.length < 13){
            setDisabledButton(true)
            setErrorTextInput(true)
        }
        if(selectedPosition.length === 0){
            setDisabledButton(true)
            setErrorRadioInput(true)
        }
        if(imageName.length === 0){
            setDisabledButton(true)
            setErrorUploadImage(true)
        }
    }

    useEffect(() => {
        if(!isErrorTextInput && !isErrorRadioInput){
            setDisabledButton(false)
        }
    }, [isErrorTextInput, isErrorRadioInput])
    
    return (
    <section className='registration-form'>
        <h1>Working with POST request</h1>
        <form>
            <TextInput 
                error={disabledButton}
                values={{ valueName, valueEmail, valuePhone }}
                setValues={{ setValueName, setValueEmail, setValuePhone, setErrorTextInput }}
            />
            <RadioInput 
                selectedPosition={selectedPosition}
                setSelectedPosition={setSelectedPosition}
                error={disabledButton}
                setErrorRadioInput={setErrorRadioInput}
             />
             <UploadImage 
                imageName={imageName}
                setImageName={setImageName}
                error={disabledButton}
                setErrorUploadImage={setErrorUploadImage}
             />
            <Button 
                backgroundColor={disabledButton ? '#B4B4B4' : '#F4E041'} 
                backgroundHover={disabledButton ? undefined : '#FFE302'} 
                color={disabledButton ? '#FFFFFF' : 'black'} 
                small 
                onClick={handleClick}
            >
                Sign up
            </Button>
        </form>
    </section>
    )
}
