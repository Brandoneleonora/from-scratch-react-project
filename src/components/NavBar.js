import React from "react"
import { NavLink } from 'react-router-dom'
import './cssFolder/NavBar.css'

function NavBar(){
    return(
        <div class='nav_bar'>
            <div>
                <NavLink to='/' className='navLogo'>Get Jacked</NavLink>
            </div>
            <div className="navButtons">
                <NavLink to='/' className='button1'>Home</NavLink>
                <NavLink to='/form' className='button2'>Add Item</NavLink>
                <NavLink to='/cart' className='button3'>Cart</NavLink>
            </div>
            
        </div>
    )
}

export default NavBar;