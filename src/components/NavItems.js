import React, { useState } from 'react'

export default function NavItems( props ) {

    const [open, setOpen] = useState(false);

    let linkClass = props.linkClass ? props.linkClass : "icon-button";

    return (
        <li className="nav-item">
            <a 
                href={ props.linkSection } 
                className={ linkClass } 
                onClick={() => setOpen(!open)}
                style={{ backgroundColor: props.bgColor }}
                target={ props.target ? "_blank" : "" }
            >
                <span>{ props.linkName } { props.icon }</span>
            </a>
            {
                open && props.children
            }
        </li>
    )
}
