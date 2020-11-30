import React from 'react'
import { Row } from 'react-bootstrap'
import UserCard from './UserCard'

export default function UserList(props) {
    return (
        <div>
            <Row>
            {
                props.users.map(user => (<UserCard key={user.id} user={user} />))
            }
            </Row>
        </div>
    )
}
