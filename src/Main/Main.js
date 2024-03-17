import React, {useState} from 'react'
import GeneralInfo from './Sections/GeneralInfo/GeneralInfo'
import UserCards from './Sections/UserCards/UserCards'
import RegistrationForm from './Sections/RegistrationForm/RegistrationForm'

export default function Main() {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    return (
        <main>
            <GeneralInfo />
            <UserCards
                users={users}
                setUsers={setUsers}
                page={page}
                setPage={setPage}
            />
            <RegistrationForm 
                setUsers={setUsers}
                page={page}
                setPage={setPage}
            />
        </main>
    )
}
