import React from 'react'

export default function NavItems( props ) {
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">
                { props.icon }
            </a>
        </li>
    )
}
