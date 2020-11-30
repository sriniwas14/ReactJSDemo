import React from 'react'

export default function UserList(props) {
    return (
        <div>
            {
                props.users.map(user => (<h1>{ user.first_name }</h1>))
            }
        </div>
    )
}
