import React from "react"
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <nav>
            <NavLink to='/' className='navButtons'>Home</NavLink>
            <NavLink to='/form' className='navButtons'>Add Toy</NavLink>
        </nav>
    )
}

export default NavBar;