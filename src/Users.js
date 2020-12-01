import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setUsers } from './actions/userAction'
import Loader from './elements/Loader'
import UserList from './elements/UserList'
import { Dropdown } from 'react-bootstrap'

const apiUrl = "https://reqres.in/api/users?delay=3"
const compStyle = {
    heading: {
        textAlign: "center",
        margin: "50px 0",
        cursor: "default"
    },
    sortToolbar: {
        paddingRight: "11px",
        textAlign: "right"
    }
}


function Users(props) {
    const [sortKey, setSortKey] = useState({ index: "id", value: "None" })

    useEffect(() => {
        fetchUsers()
    },[])

    useEffect(() => {
        let sorted = []
        if(sortKey.index!=="id")
            sorted = [...props.users].sort((a, b) => a[sortKey.index].localeCompare(b[sortKey.index]));
        else
            sorted = [...props.users].sort((a, b) => a[sortKey.index]-b[sortKey.index]);

        props.setUsers(sorted)
    }, [sortKey])

    function fetchUsers() {
        fetch(apiUrl)
            .then(res => res.json())
            .then(result => {
                props.setUsers(result.data)
            })
    }

    return (
        <div>
        {
            props.users.length>0 ? (
                <div>
                    <h1 className="display-4" style={compStyle.heading}>Users</h1>
                    <div style={compStyle.sortToolbar}>
                        <span style={{ paddingRight: "10px" }}>Sort By:</span>
                        <Dropdown key={1} style={{ display: "inline" }}>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                { sortKey.value }
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1" onClick={(e) => setSortKey({index: 'id', value: e.target.innerText })}>None</Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={(e) => { console.log(e); setSortKey({index: 'first_name', value: e.target.innerText })} }>First Name</Dropdown.Item>
                                <Dropdown.Item eventKey="3" onClick={(e) => setSortKey({index: 'last_name', value: e.target.innerText })} >Last Name</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
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
