import React from 'react'

export default function Content(props) {

    const banner = (
        <div>
            { props.content }
        </div>
    )

    return (
        <div style={{ position: "absolute" }}>
            { banner }
        </div>
    )
}
