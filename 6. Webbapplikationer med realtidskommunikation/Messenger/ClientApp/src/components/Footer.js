import React from 'react'

const styling = {
    "backgroundColor": "#3b54e3",
    "color": "white",
    "padding": 10,
    "marginBottom": 0,
}

export default function Footer({ addMessage, chatMessage, chatMessageLabel }) {
    return (
        <div>
            <div className="container" style={styling}>
                <form>
                    <div className="form-group row" style={{ "marginBottom": 0 }} >
                        <div className="col-8 text-center form-group">
                            <input id="messageInput" type="text" className="form-control" placeholder="Message" ref={chatMessage} />
                            <small id="messageHelp" style={{ "paddingTop": 10 }} ref={chatMessageLabel} className="font-weight-bold form-text text-danger text-left">&nbsp;</small>
                        </div>
                        <div className="col-4 text-right">
                            <input type="submit" onClick={addMessage} className="btn btn-success " style={{ "width": "100%" }} value="Send" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}