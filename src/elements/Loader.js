import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader() {
    return (
        <div className="appLoader">
            <Spinner animation="grow" variant="primary" /><br/>
            <span>Loading</span>
        </div>
    )
}
