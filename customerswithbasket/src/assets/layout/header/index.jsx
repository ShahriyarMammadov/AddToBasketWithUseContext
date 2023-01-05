import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './index.scss'

const HeaderComp = () => {
    return (
        <header>
            <div className="logo">
                <h1><Link to={'/'}>Products</Link ></h1>
            </div>
            <nav>
                <NavLink to='/'>HomePage</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
            </nav>
        </header>
    )
}

export default HeaderComp