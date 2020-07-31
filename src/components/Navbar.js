import React from 'react'

import { ReactComponent as Logo } from '../img/icons/vr-glasses.svg'

export default function Navbar( props ) {
    return (
        <nav className="navbar">
            <div className="logo">
                <Logo className="" /> 
                <span className="logo-text">Cod3r</span>
            </div>
            <ul className="navbar-nav">
                { props.children }
            </ul>
        </nav>
    )
}
