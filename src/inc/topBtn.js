import React, { useState } from 'react'

// CSS
import "./topBtn.css"

// Icon
import { ReactComponent as BackTop } from '../img/icons/space-invaders.svg'

export default function TopBtn() {

    //Get the button:
    const [displayBtn, setDisplayBtn] = useState("none");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setDisplayBtn(
                "block"
            );
        } else {
            setDisplayBtn(
                "none"
            );
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


    return (
        <button 
            id="myBtn"
            onClick={ topFunction }
            title="Lemme take you to the top"
            style={{ display: displayBtn }}
        >
            <BackTop />
        </button>
    )
}
