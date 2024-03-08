import React from 'react'
import './TextInput.css'
import Input from '../../../../components/Input'

export default function TextInput(props) {

    const { error, values, setValues } = props
    const { valueName, valueEmail, valuePhone } = values
    const { setValueName, setValueEmail, setValuePhone } = setValues

    return (
    <div className="text-input">
        <Input
            name='name'
            label='Your name'
            type='text'
            maxLength={25} 
            value={valueName}
            onChange={e => setValueName(e.target.value)}
            error={valueName.length < 5 ? error : undefined}
            onKeyPress={(e) => {
                const charCode = e.charCode
                if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 1040 && charCode <= 1103) || charCode === 32)) {
                    e.preventDefault()
                }
            }}
            errorText='min 5, max 25 characters'
        />
        <Input
            name='email'
            label='Email'
            type='email'
            maxLength={25}
            value={valueEmail}
            onChange={e => setValueEmail(e.target.value)}
            error={(valueEmail.length < 10 || !valueEmail.includes('@') || valueEmail.indexOf('@') + 6 > valueEmail.length || valueEmail.indexOf('@') === 0) ? error : undefined}
            onKeyPress={e => {
                const charCode = e.charCode;
                if ((charCode >= 1024 && charCode <= 1157) || (charCode >= 1160 && charCode <= 1114) || charCode === 1105 || charCode === 39 || charCode === 96) {
                    e.preventDefault();
                }
            }}
            errorText='min 10, max 25 characters and special character "@"'
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
            error={!valuePhone.startsWith('+') || valuePhone.length < 13 ? error : undefined}
            onKeyPress={(e) => {
                const charCode = e.charCode;
                if (charCode < 48 || charCode > 57) {
                    e.preventDefault();
                }
            }}
            errorText='+38 (XXX) XXX - XX - XX'
        />
    </div>
    )
}
