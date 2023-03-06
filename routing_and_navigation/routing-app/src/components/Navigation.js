import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login"><button>Login Button</button></Link></li>
            <li><Link to="/books"><button>Books Button</button></Link></li>

        </ul>
    </nav>
  )
}

export default Navigation