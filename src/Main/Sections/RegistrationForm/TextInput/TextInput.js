import React from 'react'
import './TextInput.css'
import Input from '../../../../components/Input'

export default function TextInput(props) {

    const { error, values, setValues } = props
    const { valueName, valueEmail, valuePhone } = values
    const { setValueName, setValueEmail, setValuePhone, setErrorTextInput } = setValues

    if(error && valueName.length >= 2 && (valueEmail.length >= 10 && valueEmail.includes('@') && valueEmail.indexOf('@') + 5 < valueEmail.length && valueEmail.indexOf('@') !== 0) && valuePhone.length === 13){
        setErrorTextInput(false)
    }

    return (
    <div className="text-input">
        <Input
            name='name'
            label='Your name'
            type='text'
            maxLength={60} 
            value={valueName}
            onChange={e => setValueName(e.target.value)}
            error={valueName.length < 2 ? error : undefined}
            onKeyPress={(e) => {
                const charCode = e.charCode
                if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 1040 && charCode <= 1103) || charCode === 32)) {
                    e.preventDefault()
                }
            }}
            helperText='min 2, max 60 characters'
        />
        <Input
            name='email'
            label='Email'
            type='email'
            maxLength={100}
            value={valueEmail}
            onChange={e => setValueEmail(e.target.value)}
            error={!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(valueEmail) ? error : undefined}
            helperText='max 100 characters and special character "@"'
        />
        <Input
            name="phone"
            label='Phone'
            type='tel'
            maxLength={13} 
            value={valuePhone}
            onFocus={e => {
                if(valuePhone.length === 0){
                    setValuePhone('+38' + e.target.value)
                }
            }}
            onChange={e => {
                if(valuePhone.length === 0){
                    setValuePhone('+38' + e.target.value)
                } else {
                    setValuePhone(e.target.value)
                }
            }}
            error={valuePhone.length < 13 ? error : undefined}
            onKeyPress={(e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                    e.preventDefault();
                }
            }}
            helperText='+38 (XXX) XXX - XX - XX'
        />
    </div>
    )
}
