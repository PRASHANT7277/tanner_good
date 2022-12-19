import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from './context'
const PrivateRoute = ({children}) => {
 const { flag } = useContext(Context);

 if(flag){
    return <Navigate to="/" />
 }else{
    return children
 }
}

export default PrivateRoute

