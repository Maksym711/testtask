import React from 'react'
import GeneralInfo from './Sections/GeneralInfo/GeneralInfo'
import UserCards from './Sections/UserCards/UserCards'
import RegistrationForm from './Sections/RegistrationForm/RegistrationForm'

export default function Main() {
    return (
        <main>
            <GeneralInfo />
            <UserCards />
            <RegistrationForm />
        </main>
    )
}
