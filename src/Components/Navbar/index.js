import React from 'react'
import Logo from "./logo.png"

const NavBar = () => {
    return (
        <nav>
            <img src={Logo}/>
            <h5 className="logo">Team Waterpolo</h5>
        </nav>
    )
}

export default NavBar
