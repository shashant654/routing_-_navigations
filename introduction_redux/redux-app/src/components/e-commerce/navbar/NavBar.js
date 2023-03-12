import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './NavBar.css'



function NavBar() {
  return (
    <nav>
        <h2 className='banner'>My Myntra</h2>
        <div className='right-layout'>
            <div className='cart-layout'>
                <AiOutlineShoppingCart />
               <h3>4</h3>
            </div>
        </div>
    </nav>
  )
}

export default NavBar