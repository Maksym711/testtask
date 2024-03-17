import React from 'react'
import './Success.css'
import success_logo from '../image/success-image.svg'

export default function Success() {
    return (
    <div className='success'>
        <h1>User successfully registered</h1>
        <img src={success_logo} alt="success" />
    </div>
    )
}
