import React from 'react'
import { Outlet,useLocation } from "react-router"
import { Link } from "react-router-dom"
function Pricing() {

 const location = useLocation();

  return (
    <div>Show Pricing
        {/* <nav>
            <Link to={location.pathname + "/free"}>Free </Link>
            <Link to={location.pathname + "/premium"}>Premium </Link>
            <Link to={location.pathname + "/Freemium"}>Freemium</Link>

        </nav> */}
        <Outlet />
    </div>
  )
}

export default Pricing