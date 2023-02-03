
import React from 'react'
import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';

const ProtectedRoutes = ({ children }) => {
  
    const token = localStorage.getItem('token')
    if(token===null) return <Navigate to="/" />
    // decode the jwt token and check the expiration time
    const decoded = jwt_decode(token);

    // if token is not there redirect to login or token expired
    if (token === null) {
        localStorage.clear();
        return <Navigate to="/" />;
    }
    return children
}

export default ProtectedRoutes