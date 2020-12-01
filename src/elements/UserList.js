import React from 'react'
import { Row } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'
import UserCard from './UserCard'


export default function UserList(props) {
    const animProps = useSpring({ to: { opacity: 1, transform: 'scaleY(1)' } , from:{ opacity: 0, transform: 'scaleY(0.8)' }})
    return (
        <animated.div style={animProps}>
            <Row>
            {
                props.users.map(user => (<UserCard key={user.id} user={user} />))
            }
            </Row>
        </animated.div>
    )
}
