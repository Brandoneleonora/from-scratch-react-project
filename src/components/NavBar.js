import React from "react"
import { NavLink } from 'react-router-dom'

function NavBar(){
    return(
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/toys'>Toys</NavLink>
            <NavLink to='/form'>Add Toy</NavLink>
        </div>
    )
}

export default NavBar;