import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setUsers } from './actions/userAction'
import Loader from './elements/Loader'
import UserList from './elements/UserList'

const apiUrl = "https://reqres.in/api/users?delay=3"

function Users(props) {
    useEffect(() => {
        fetchUsers()
    },[])

    function fetchUsers() {
        fetch(apiUrl)
            .then(res => res.json())
            .then(result => {
                props.setUsers(result.data)
            })
    }

    return (
        <div className="userViewContainer">
        {
            props.users.length>0 ? (
                <div>
                    <h1 className="display-4" style={{ textAlign: "center", margin: "50px 0", cursor: "default" }}>Users</h1>
                    <UserList users={props.users} />
                </div>
            ) : (<Loader />)
        }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: setUsers(dispatch)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
