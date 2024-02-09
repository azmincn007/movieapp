import React from 'react'
import './Header.css'
import { RiMovie2Fill } from "react-icons/ri";
function Header() {
  return (
    <nav>
    <div className="sec-1">
        <RiMovie2Fill className='movielogo'/>
        <div className='logo-name'>wonderland</div>
    </div>

    <div className="sec-2">
        <div className='home'>Home</div>
        <div>Explore</div>
        <div>Booking</div>
        <div>Orders</div>
    </div>
</nav>
  )
}

export default Header
