import React, { useState } from 'react'

export default function NavItems( props ) {

    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="/#" className="icon-button" onClick={() => setOpen(!open)}>
                { props.icon }
            </a>
            {
                open && props.children
            }
        </li>
    )
}
