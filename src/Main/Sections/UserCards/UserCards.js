import React, { useEffect, useState } from 'react'
import './UserCards.css'
import Loading from '../../../components/Loading'
import Button from '../../../components/Button'
import Card from '../../../components/Card'

export default function UserCards(props) {

    const [loading, setLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${props.page}&count=6`)
            .then(data => data.json())
            .then(data => {
                props.setUsers(prevUsers => [...prevUsers, ...data.users])
                setTotalPage(data.total_pages)
            })
            .catch(error => alert(error))
            .finally(() => setLoading(false))
    }, [props.page])

    const handleClick = () => {
        props.setPage(prev => prev + 1)
    }

    return (
    <section id="user-cards">
        {loading && <Loading />}
        <h1>Working with GET request</h1>
        <div className="content-user-cards">
            {props.users.map((item, index) => <Card
                key={index}
                photo={item.photo}
                name={item.name}
                position={item.position}
                email={item.email}
                phone={item.phone}
             />)}
        </div>
        {props.page < totalPage &&(
            <Button 
                backgroundColor='#F4E041' 
                backgroundHover={'#FFE302'} 
                color='black' 
                margin='auto'
                big 
                onClick={handleClick}
            >
                Show more
            </Button>
        )}
    </section>
    )
}
