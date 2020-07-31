import React from 'react'

// CSS
import './Footer.css'

import { ReactComponent as ReactLogo } from '../logo.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <span><small>Made by</small>&nbsp;
                <span role="img" aria-label="heart" aria-labelledby="heart">❤️</span>
                { <ReactLogo className="ReactLogo" /> }
            </span>
        </footer>
    )
}
