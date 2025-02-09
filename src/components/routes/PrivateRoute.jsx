import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Providers/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { user , loading } = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    )
}

PrivateRoute.propTypes = {}

export default PrivateRoute