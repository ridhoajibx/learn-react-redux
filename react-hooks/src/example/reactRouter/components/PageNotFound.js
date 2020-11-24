import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='container'>
            <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
                <h3>404 This page not found</h3>
                <div>
                    <Link className="btn btn-primary" to="/">Go Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
