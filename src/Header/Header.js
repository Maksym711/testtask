import React from 'react'
import './Header.css'
import icon_logo from '../image/logo_company.svg'
import name_logo from '../image/name_company.svg'
import Button from '../components/Button'

export default function Header() {

    return (
    <header>
        <div className="content-header">
            <div className="logo">
                <img className='icon_logo' src={icon_logo} alt="logo" />
                <img className='name_logo' src={name_logo} alt="testtask" />
            </div>
            <div className="buttons">
                <Button backgroundColor='#F4E041' backgroundHover={'#FFE302'} color='black' small >
                    Users
                </Button>
                <Button backgroundColor='#F4E041' backgroundHover={'#FFE302'} color='black' small  onClick={() => console.log('jeeeee')}>
                    Sign up
                </Button>
            </div>
        </div>
    </header>
    )
}
