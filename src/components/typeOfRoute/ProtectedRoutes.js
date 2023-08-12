import React from 'react'
import { useEffect } from 'react';
import store from '../../store/store'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoutes(props) {

    const items = useSelector((state) => state.loginData[0].id)
    const userId=localStorage.getItem("userId")
    console.log(items);
    // const validateId=async (userId)=>{
    //     try {
    //         const userRecord = await firebase.auth().getUser(userId);
    //         console.log('User data:', userRecord.toJSON());
    //         return true;
    //       } catch (error) {
    //         console.error('Error fetching user data:', error);
    //         return false;
    //       }
    //     }
    


    if ( userId) {
            return props.children;
    } else {
        return <Navigate to = "/login" / >
    }

}

export default ProtectedRoutes