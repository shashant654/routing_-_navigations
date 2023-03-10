import React from 'react'
// import { useNavigate,Navigate} from 'react-router'
import { Navigate} from 'react-router'

import { Outlet } from 'react-router-dom'

function ProtectedRoute() {

    // const navigate = useNavigate();

    const isLoggedIn = true;
        // const isLoggedIn = false;


  return (
    <>
    {isLoggedIn ? <Outlet /> : <Navigate to = "/login" />}
    </>
  )
}

export default ProtectedRoute