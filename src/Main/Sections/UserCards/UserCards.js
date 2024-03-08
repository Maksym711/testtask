import React, { useEffect, useState } from 'react'
import './UserCards.css'
import Loading from '../../../components/Loading'
import Button from '../../../components/Button'
import Card from '../../../components/Card'

export default function UserCards() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
            .then(data => data.json())
            .then(data => {
                setUsers(prevUsers => [...prevUsers, ...data.users])
                setTotalPage(data.total_pages)
            })
            .catch(() => alert('Error'))
            .finally(() => setLoading(false))
    }, [page])

    const handleClick = () => {
        setPage(prev => prev + 1)
    }

    return (
    <section className="user-cards">
        {loading && <Loading />}
        <h1>Working with GET request</h1>
        <div className="content-user-cards">
            {users.map((item, index) => <Card
                key={index}
                photo={item.photo}
                name={item.name}
                position={item.position}
                email={item.email}
                phone={item.phone}
             />)}
        </div>
        {page < totalPage &&(
            <Button backgroundColor='#F4E041' backgroundHover={'#FFE302'} color='black' big onClick={handleClick}>
                Show more
            </Button>
        )}
    </section>
    )
}
