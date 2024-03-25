import React, { useContext, useState } from 'react'
import './Header.css'
import { RiMovie2Fill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { tokenCOntext } from '../App';
import { Link } from 'react-router-dom';
function Header() {
  const [isLoggedIn, setIsLoggedIn]=useContext(tokenCOntext)

  const logout=()=>{
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

 
  const token = localStorage.getItem('token');
  return (
    <nav>
      <div className="sec-1">
        <RiMovie2Fill className="movielogo" />
        <div className="logo-name">wonderland</div>
      </div>

      <div className="sec-2">
      <Link to={'/'}>        <div className="home">Home</div>
</Link>

        <Link> <div>Explore</div>
        </Link>
       
        <div>Booking</div>
        <Link to={'/contact'}><div>contact</div></Link>
        

        {token ? (
          <div className="loginbutheader ">
            <div className="profile">
              <CgProfile onClick={logout}/>
            </div>
            <div className="guest"> HI,Guest</div>
          </div>
        ) : (
          <div className="loginbutheader">
            <Link to={'/login'}>
            <button className="but">login</button> </Link>
            
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header
