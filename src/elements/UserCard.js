import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'

export default function UserCard(props) {
    const animProps = useSpring({ to: { opacity: 1, transform: 'scaleY(1)' } , from:{ opacity: 0, transform: 'scaleY(0.8)' }})

    function getFullName(user) {
        return user.first_name+" "+user.last_name
    }

    return (
        <Col md={4}>
            <animated.div style={ animProps }>
                <Link className="userCardLink" to={`/users/${props.user.id}`}>
                    <Card className="userCard" style={{ margin: 10, padding: 10, display: "block" }}>
                        <Image src={props.user.avatar} width="100%" rounded/>
                        <Card.Title className="userCardTitle">{ getFullName(props.user) }</Card.Title>
                        <Card.Text className="userCardDetails">{ props.user.email }</Card.Text>
                    </Card>
                </Link>
            </animated.div>
        </Col>
    )
}
