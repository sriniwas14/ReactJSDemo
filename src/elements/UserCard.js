import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

export default function UserCard(props) {
    function getFullName(user) {
        return user.first_name+" "+user.last_name
    }

    return (
        <Col md={4}>
            <Card className="userCard" style={{ margin: 10, padding: 10 }}>
                <Image src={props.user.avatar} rounded/>
                <Card.Title className="userCardTitle">{ getFullName(props.user) }</Card.Title>
                <Card.Text className="userCardDetails">{ props.user.email }</Card.Text>
            </Card>
        </Col>
    )
}
