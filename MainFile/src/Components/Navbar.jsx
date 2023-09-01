import React from 'react'
import "./Navbar.css"
import Logo from"../Images/vydya-removebg-preview.png"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
     <nav>
        <div><img className="Logo" src={Logo} alt="LOGO HERE" /></div>
        <div className='Options'>
            <ul>
            <li><NavLink  to="." > Home</NavLink></li>
            <li><NavLink  to="/bloodservices" > Blood Services</NavLink></li>
            <li><NavLink  to="/appointment" > Appointment</NavLink></li>
            <li><NavLink  to="/userinfo" > User Info</NavLink></li>
            <li><NavLink  to="/ourproducts" > Our Products</NavLink></li>
            <li><NavLink  to="/about" > About</NavLink></li>
        </ul></div>
        <div className='loginwrapper' >
        <button>
    Sign up
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button><button>
    Login
    <div class="arrow-wrapper">
        <div class="arrow"></div>

    </div>
</button>
        </div>
     </nav>
    </div>
  )
}
