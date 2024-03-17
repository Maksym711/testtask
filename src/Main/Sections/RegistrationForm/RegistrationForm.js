import React, { useEffect, useState } from 'react'
import './RegistrationForm.css'
import TextInput from './TextInput/TextInput'
import RadioInput from './RadioInput/RadioInput'
import UploadImage from './UploadImage/UploadImage'
import Button from '../../../components/Button'
import Success from '../../../components/Success'


export default function RegistrationForm(props) {

    const [valueName, setValueName] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [selectedPositionId, setSelectedPositionId] = useState(null)
    const [uploadedFile, setUploadedFile] = useState(null)
    const [isErrorTextInput, setErrorTextInput] = useState(false)
    const [isErrorRadioInput, setErrorRadioInput] = useState(false)
    const [isErrorUploadImage, setErrorUploadImage] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)
    const [token, setToken] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
            .then(data => data.json())
            .then(data => setToken(data.token))
            .catch(error => alert(error))
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        if(valueName.length < 2 || 
            valueName.startsWith(' ') ||
            valueName.startsWith('-') ||
            /  |--/.test(valueName) ||
            !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(valueEmail) || 
            valuePhone.length < 13)
        {
            setDisabledButton(true)
            setErrorTextInput(true)
        }
        if(!selectedPositionId){
            setDisabledButton(true)
            setErrorRadioInput(true)
        }
        if(!uploadedFile || (uploadedFile && uploadedFile.size > 5000000)){
            setDisabledButton(true)
            setErrorUploadImage(true)
        }
        if(valueName.length >= 2 && 
            !valueName.startsWith(' ') &&
            !valueName.startsWith('-') &&
            !/  |--/.test(valueName) &&
            /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(valueEmail) && 
            valuePhone.length === 13 && 
            selectedPositionId && 
            uploadedFile && 
            (uploadedFile && uploadedFile.size <= 5000000))
        {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { 
                method: 'POST', 
                body: formData, 
                headers: {'Token': token}
            }) 
                .then(() => { 
                    setIsSuccess(true)
                    setTimeout(() => {
                        setIsSuccess(false)
                    }, 3000)

                    if(props.page === 1){
                        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`)
                            .then(data => data.json())
                            .then(data => {
                                props.setUsers(data.users)
                            })
                            .catch(error => alert(error))
                    }else{
                        props.setUsers([])
                        props.setPage(1)
                    }
                        document.getElementById('user-cards').scrollIntoView({ behavior: 'smooth' })
                        setValueName('')
                        setValueEmail('')
                        setValuePhone('')
                        setUploadedFile(null)
                })
                .catch(error => alert(error))
            }
    }

    useEffect(() => {
        if(!isErrorTextInput && !isErrorRadioInput && !isErrorUploadImage){
            setDisabledButton(false)
        }
    }, [isErrorTextInput, isErrorRadioInput, isErrorUploadImage])

    const formData = new FormData()
    formData.append('name', valueName)
    formData.append('email', valueEmail)
    formData.append('phone', valuePhone)
    formData.append('position_id', selectedPositionId)
    formData.append('photo', uploadedFile)
    
    return (
    <section id='registration-form'>
        <h1>Working with POST request</h1>
        <form>
            <TextInput 
                error={disabledButton}
                values={{ valueName, valueEmail, valuePhone }}
                setValues={{ setValueName, setValueEmail, setValuePhone, setErrorTextInput }}
            />
            <RadioInput 
                setSelectedPositionId={setSelectedPositionId}
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
                margin='auto'
                color={disabledButton ? '#FFFFFF' : 'black'} 
                small 
                onClick={handleClick}
            >
                Sign up
            </Button>
        </form>
        {isSuccess && <Success />}
    </section>
    )
}
