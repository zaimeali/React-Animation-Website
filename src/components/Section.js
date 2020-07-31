import React from 'react'

export default function Section(props) {
    return (
        <div 
            className={ props.sectionClass } 
            style={{ backgroundColor: props.bgColor }}
        >
            { props.bannerContent ? (
                <span className="bannerContent">
                    { props.bannerContent }
                </span>
            ) : "" }
            <span className="banner-illustration">
                { props.imgIllus }
            </span>
        </div>
    )
}
