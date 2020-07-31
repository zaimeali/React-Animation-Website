import React from 'react'

export default function BannerContent() {
    return (
        <div className="animated-title">
            <div className="text-top">
                <div>
                    <span>My Name is</span>
                    <span>Abdul Raffay <>👨‍💻</></span>
                </div>
            </div>
            <div className="text-bottom">
                <div>
                    <span className="lessPadding"><small style={{ fontSize: "22px" }}>and</small></span>
                    <span style={{ fontSize: "38px" }}>I am Web Developer <>🚀</></span>
                </div>
            </div>
        </div>
    )
}
