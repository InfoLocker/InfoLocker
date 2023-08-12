import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoutes(props) {

    const userId=localStorage.getItem("userId")

    if (!userId) {
            return props.children;
    } else {
        return <Navigate to = "/profile" />
    }

}

export default PublicRoutes