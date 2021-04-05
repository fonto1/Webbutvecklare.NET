import React, { useRef, useEffect, useState } from 'react'
import { HubConnectionBuilder } from "@microsoft/signalr";
let context = ""
let canvas = ""
let hub = ""
let draw = false;
let color = "black"
let cordinates = []
const canvasStyling = {
    border: "1px solid black",
}

export default function Canvas() {
    const [allCordinates, updateAllCordinates] = useState(JSON.parse(localStorage.getItem("whiteboard")) || [])
    const canvasRef = useRef();

    const mouseDown = (e) => {
        cordinates = []
        const board = canvas.getBoundingClientRect();
        context.beginPath();
        context.strokeStyle = color
        context.moveTo(e.pageX - board.left, e.pageY - board.top) //börja
        cordinates.push({ X: e.pageX - board.left, Y: e.pageY - board.top, Color: color })
        draw = true;
    }

    const Move = (e) => {
        if (draw) {
            const board = canvas.getBoundingClientRect();
            context.lineTo(e.pageX - board.left, e.pageY - board.top) // rita
            cordinates.push({ X: e.pageX - board.left, Y: e.pageY - board.top, Color: color })
            context.stroke()
        }
    }

    const mouseUp = () => {
        if (draw) {
            hub.invoke("sendWhiteboard", cordinates).catch(err => console.error(err));
            draw = false
        }
    }

    const drawToPage = () => {
        allCordinates.forEach(points => {
            points.forEach((point, index) => {
                if (index === 0) {
                    context.beginPath();
                    context.moveTo(point.x, point.y)
                } else {
                    context.lineTo(point.x, point.y) // rita
                    context.strokeStyle = point.color
                    context.stroke()
                }
            });
        })

        if (!Array.isArray(allCordinates) || !allCordinates.length) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    useEffect(() => {
        const tempCanvas = canvasRef.current;
        let tempContext = tempCanvas.getContext("2d")
        tempCanvas.style.width = "100%"
        tempCanvas.width = tempCanvas.offsetWidth;
        tempCanvas.height = window.innerHeight;
        tempCanvas.height = tempCanvas.offsetHeight;

        const connection = new HubConnectionBuilder().withUrl("/messengerhub").build();
        connection.on("whiteboard", (newMessage) => {
            updateAllCordinates(prevState => [...prevState, newMessage])
        })
        connection.on("clear", (newMessage) => {
            updateAllCordinates([]);
        })
        hub = connection;
        canvas = tempCanvas;
        context = tempContext;
        connection.start()
        drawToPage();
    }, []);

    useEffect(() => {
        localStorage.setItem("whiteboard", JSON.stringify(allCordinates));
        drawToPage();
    }, [allCordinates, drawToPage])

    useEffect(() => {
        return () => {
            hub.stop()
        }
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-3 text-center" style={{ fontSize: "3rem" }}>
                    <div className="col-12">
                        <i className="fas fa-pencil-alt" onClick={() => { color = "black" }} style={{ color: "black" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "red" }} style={{ color: "red" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "blue" }} style={{ color: "blue" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "green" }} style={{ color: "green" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "yellow" }} style={{ color: "yellow" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "pink" }} style={{ color: "pink" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "orange" }} style={{ color: "orange" }}></i>
                        <i className="fas fa-pencil-alt" onClick={() => { color = "purple" }} style={{ color: "purple" }}></i>
                        <i className="far fa-square" style={{ color: "silver" }} onClick={() => {
                            hub.invoke("clearboard", "clear").catch(err => console.error(err));
                            draw = false
                        }}></i>
                    </div>
                </div>
                <div className="col-9">
                    <canvas style={canvasStyling} onMouseMove={Move} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseOut={mouseUp} ref={canvasRef} >
                    </canvas>
                </div>
            </div>
        </div>
    )
}