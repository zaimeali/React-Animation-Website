import React, { useState, createRef, useEffect } from 'react'

// React Transition
import { CSSTransition } from 'react-transition-group'

// Icon
import { ReactComponent as Arrow } from '../img/icons/arrow.svg'


export default function DropDownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = createRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [dropdownRef])

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
          <a href="/#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
                <span className="menu-item-text">{ props.children }</span>
            <span className="icon-right">{props.rightIcon}</span>
          </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition
                in={ activeMenu === 'main' }
                unmountOnExit
                timeout={ 500 }
                classNames="menu-primary"
                onEnter={ calcHeight }
            >
                <div className="menu">
                    <DropdownItem className="second-dropdown" rightIcon="🍪" leftIcon="🏖️">My Profile</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🍪" goToMenu="settings">Settings</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦁" goToMenu="animals">Animals</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ activeMenu === 'settings' }
                unmountOnExit
                timeout={ 500 }
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem 
                        goToMenu="main"
                        leftIcon={ <Arrow /> }
                    >
                        <h2>My Tutorial</h2>
                    </DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🍪" goToMenu="main">nice</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ activeMenu === 'animals' }
                unmountOnExit
                timeout={ 500 }
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem 
                        goToMenu="main"
                        leftIcon={ <Arrow /> }
                    >
                        <h2>Animals</h2>
                    </DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🐅" goToMenu="main">Tiger</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🐆" goToMenu="main">Leopard</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦘" goToMenu="main">Kangaroo</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🐘" goToMenu="main">Elephant</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦅" goToMenu="main">Eagle</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦍" goToMenu="main">Gorilla</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}