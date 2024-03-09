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
            maxLength={15} 
            value={valueName}
            onChange={e => setValueName(e.target.value)}
            error={valueName.length < 2 ? error : undefined}
            onKeyPress={(e) => {
                const charCode = e.charCode
                if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 1040 && charCode <= 1103) || charCode === 32)) {
                    e.preventDefault()
                }
            }}
            helperText='min 2, max 15 characters'
        />
        <Input
            name='email'
            label='Email'
            type='email'
            maxLength={35}
            value={valueEmail}
            onChange={e => setValueEmail(e.target.value)}
            error={(valueEmail.length < 10 || !valueEmail.includes('@') || valueEmail.indexOf('@') + 6 > valueEmail.length || valueEmail.indexOf('@') === 0) ? error : undefined}
            onKeyPress={e => {
                const charCode = e.charCode;
                if ((charCode >= 1024 && charCode <= 1157) || (charCode >= 1160 && charCode <= 1114) || charCode === 1105 || charCode === 39 || charCode === 96) {
                    e.preventDefault();
                }
            }}
            helperText='min 10, max 35 characters and special character "@"'
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
