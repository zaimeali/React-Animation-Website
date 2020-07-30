import React from 'react'

function DropDownItem(props){
    return (
        <a href="#" className="menu-item">
            <span className="icon-button">{ props.leftIcon }</span>
            { props.children }
            <span className="icon-right">{ props.rightIcon }</span>
        </a>
    )
}

export default function DropDownMenu() {
    return (
        <div className="dropdown">
            <DropDownItem rightIcon="🍪" leftIcon="🏖️">My Profile</DropDownItem>
        </div>
    )
}