import React, { useState, useEffect } from 'react'
import { useParams, withRouter } from "react-router-dom"
import { connect } from 'react-redux'
import Loader from './elements/Loader'
import { Row, Col, Image, Button } from 'react-bootstrap'
import { useSpring, animated } from 'react-spring'


function UserSingle(props) {
    let { id } = useParams();
    const [selectedUser, setselectedUser] = useState(null)

    const animProps = useSpring({ to: { opacity: 1, transform: 'scaleY(1)' } , from:{ opacity: 0, transform: 'scaleY(0.8)' }})

    useEffect(() => {
        for(var i=0; i<props.users.length; i++){
            if(parseInt(id)===props.users[i].id){
                setselectedUser(props.users[i])
                break;
            }
        }
    }, [])

    if(selectedUser!==null){
        return (
            <animated.div style={animProps}>
                <h1 className="display-4" style={{ textAlign: "center", margin: "50px 0", cursor: "default" }}>{ selectedUser.first_name+" "+selectedUser.last_name }</h1>
                <Row>
                    <Col style={{ textAlign: "center" }} md={{ span:4, offset: 4 }}>
                        <Image src={selectedUser.avatar} style={{ width: "100%" }} rounded/>
                        <p>
                            <br />
                            { selectedUser.email }
                        </p>

                        <Button onClick={()=> props.history.goBack() } rounded>Go Back</Button>
                    </Col>
                </Row>
            </animated.div>
        )
    }

    return (<Loader />)
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(withRouter(UserSingle))