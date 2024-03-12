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
    const [uploadedFile, setUploadedFile] = useState(null)
    const [selectedPosition, setSelectedPosition] = useState('')
    const [isErrorTextInput, setErrorTextInput] = useState(false)
    const [isErrorRadioInput, setErrorRadioInput] = useState(false)
    const [isErrorUploadImage, setErrorUploadImage] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        if(valueName.length < 2 || !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(valueEmail) || valuePhone.length < 13){
            setDisabledButton(true)
            setErrorTextInput(true)
        }
        if(selectedPosition.length === 0){
            setDisabledButton(true)
            setErrorRadioInput(true)
        }
        if(!uploadedFile || uploadedFile.size > 5000000){
            setDisabledButton(true)
            setErrorUploadImage(true)
        }
    }

    console.log(isErrorUploadImage)

    useEffect(() => {
        if(!isErrorTextInput && !isErrorRadioInput && !isErrorUploadImage){
            setDisabledButton(false)
        }
    }, [isErrorTextInput, isErrorRadioInput, isErrorUploadImage])

    const formData = new FormData()
    formData.append('photo', uploadedFile)
    formData.append('name', valueName)
    formData.append('phone', valuePhone)
    formData.append('email', valueEmail)
    formData.append('position', selectedPosition)
    
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
                uploadedFile={uploadedFile}
                setUploadedFile={setUploadedFile}
                disabled={disabledButton}
                error={isErrorUploadImage}
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
