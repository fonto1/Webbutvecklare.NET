import React from 'react'

const styling = {
    "backgroundColor": "#3b54e3",
    "color": "white",
    "padding": 2,
}

export default function TopBanner({ name }) {
    return (
        <div>
            <div className="container" style={styling}>
                <div className="row">
                    <div className="col-9 text-center">
                        <h1>SmartHut-Messenger</h1>
                    </div>
                    <div className="bottom-align-text col-3 text-center ">
                        <h3 style={{ marginBottom: "0px", paddingTop: 7 }}>{name}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}