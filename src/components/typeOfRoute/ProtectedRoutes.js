import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes(props) {

    const userId=localStorage.getItem("userId")

    if ( userId) {
            return props.children;
    } else {
        return <Navigate to = "/login" / >
    }

}

export default ProtectedRoutes