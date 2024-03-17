import React from 'react'
import './TextInput.css'
import Input from '../../../../components/Input'

export default function TextInput(props) {

    const { error, values, setValues } = props
    const { valueName, valueEmail, valuePhone } = values
    const { setValueName, setValueEmail, setValuePhone, setErrorTextInput } = setValues

    if(error && valueName.length >= 2 && !valueName.startsWith(' ') && !valueName.startsWith('-') && !/  |--/.test(valueName) && /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(valueEmail) && valuePhone.length === 13){
        setErrorTextInput(false)
    }
    
    const nameOnKeyPress = (e) => {
        const charCode = e.charCode
        if (
            !(
                (charCode >= 65 && charCode <= 90) ||
                (charCode >= 97 && charCode <= 122) ||
                // (charCode >= 1040 && charCode <= 1103) ||
                charCode === 32 || charCode === 45 || charCode === 39
            )
        ) {
            e.preventDefault()
        }
    }

    const phoneOnKeyPress = (e) => {
        const charCode = e.charCode
        if (charCode < 48 || charCode > 57) {
            e.preventDefault()
        }
    }

    const phoneOnChange = (e) => {
        const inputValue = e.target.value
        const currentValue = valuePhone.startsWith('+380') ? '+380' + inputValue.substring(4) : inputValue

        if (valuePhone.startsWith('+380')) {
            setValuePhone(currentValue)
        } else {
            setValuePhone('+380' + currentValue)
        }
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
            error={(valueName.startsWith(' ') || valueName.startsWith('-') || valueName.length < 2 || /  |--/.test(valueName)) ? error : undefined}
            onKeyPress={nameOnKeyPress}
            helperText='min 2, max 60 characters'
            errorText='please, enter correct name (min 2, max 60 characters)'
        />
        <Input
            name='email'
            label='Email'
            type='email'
            maxLength={100}
            value={valueEmail}
            onChange={e => setValueEmail(e.target.value)}
            error={!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(valueEmail) ? error : undefined}
            onKeyPress={e => e.key === ' ' ? e.preventDefault() : undefined}
            helperText='max 100 characters'
            errorText='please, enter correct email (max 100 characters)'
        />
        <Input
            name="phone"
            label='Phone'
            type='tel'
            maxLength={13} 
            value={valuePhone}
            onFocus={e => valuePhone.length === 0 ? setValuePhone('+380' + e.target.value) : undefined}
            onChange={phoneOnChange}
            error={valuePhone.length < 13 ? error : undefined}
            onKeyPress={phoneOnKeyPress}
            helperText='+38 (XXX) XXX - XX - XX'
            errorText='please, enter correct phone (13 characters)'
        />
    </div>
    )
}
