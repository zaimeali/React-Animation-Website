import React, { useState, useRef, useEffect } from 'react'

// React Transition
import { CSSTransition } from 'react-transition-group'

// Icon
import { ReactComponent as Arrow } from '../img/icons/arrow.svg'


export default function DropDownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

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
                    <DropdownItem className="second-dropdown" leftIcon="👨🏽‍🎓" goToMenu="Certification">Certifications</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🎒" goToMenu="Projects">Recent Projects</DropdownItem>
                    <DropdownItem className="second-dropdown" rightIcon="📧" leftIcon="📬">Contact Me</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ activeMenu === 'Certification' }
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
                        <h2>Certifications</h2>
                    </DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🐅" goToMenu="main">Tiger</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🐆" goToMenu="main">Leopard</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦘" goToMenu="main">Kangaroo</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🐘" goToMenu="main">Elephant</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦅" goToMenu="main">Eagle</DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🦍" goToMenu="main">Gorilla</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={ activeMenu === 'Projects' }
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
                        <h2>Recent Projects</h2>
                    </DropdownItem>
                    <DropdownItem className="second-dropdown" leftIcon="🍪">nice</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}