import React from 'react'
export default function TextCenter({ messages, ulChat, name }) {
    return (
        <div id="ulDiv">
            <ul id="chatUl" ref={ulChat} className="overflow-auto" style={{ marginBottom: "0rem", paddingInlineStart: "0", height: "400px", listStyleType: "none" }}>
                {messages.map(text => {
                    if (text.name === name) {
                        return <li style={{
                            display: "inline-block",
                            clear: "both",
                            padding: "20px",
                            borderRadius: "30px",
                            marginBottom: "2px",
                            fontFamily: "Helvetica, Arial, sans-serif",
                            float: "right",
                        }}
                            className="alert alert-primary ml-auto text-center" key={Math.random()} title={text.time}>{text.text}</li>
                    } else {
                        return <li style={{
                            display: "inline-block",
                            clear: "both",
                            padding: "20px",
                            borderRadius: "30px",
                            marginBottom: "2px",
                            fontFamily: "Helvetica, Arial, sans-serif",
                            float: "left",
                        }}
                            className="alert alert-primary ml-auto text-left" key={Math.random()} title={text.time}>{text.name}<br></br>{text.text}</li>
                    }
                })}
            </ul>
        </div>
    )
}

// mr-auto