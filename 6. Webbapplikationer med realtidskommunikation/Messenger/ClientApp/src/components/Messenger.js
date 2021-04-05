import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from "@microsoft/signalr";
import TopBanner from "./TopBanner"
import Footer from "./Footer"
import TextCenter from "./TextCenter"
let hub = ""

export default function Message() {
    const [messages, updateMessages] = useState(JSON.parse(localStorage.getItem("messenger")) || []);
    const [name, updateName] = useState(false)
    const ulChat = useRef()
    const chatMessage = useRef()
    const chatMessageLabel = useRef()
    const server = "https://localhost:44308/api/messenger"
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [loading, updateLoading] = useState(true);

    async function addMessage(e) {
        e.preventDefault()

        if (chatMessage.current.value && chatMessage.current.value.trim().length) {
            const now = new Date()
            const HH = ("0" + now.getHours()).slice(-2)
            const MM = ("0" + now.getMinutes()).slice(-2)
            const DD = now.getDay()
            const currentTime = `${days[DD]}, ${HH}:${MM}`

            const sendMessage = { text: chatMessage.current.value, name: name, time: currentTime }
            await fetch(server, {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(sendMessage)
            })
            chatMessage.current.value = "";
            chatMessageLabel.current.innerHTML = "&nbsp;"
        } else {
            chatMessageLabel.current.innerHTML = "Error: Message-Field Cannot Be Empty"
        }
    }

    useEffect(() => {
        if (messages.length > 1 && ulChat.current) {
            if (messages[messages.length - 1].name === name || ulChat.current.scrollTop + 500 > ulChat.current.scrollHeight) {
                ulChat.current.scrollTop = ulChat.current.scrollHeight
            };
        }
        localStorage.setItem("messenger", JSON.stringify(messages));
    }, [messages, name]);

    useEffect(() => {
        async function run() {
            let tempName = false;
            while (!tempName) {
                tempName = prompt("What's your name");
            }
            const connection = new HubConnectionBuilder().withUrl("/messengerhub").build();
            hub = connection
            connection.on("Receive", (newMessage) => {
                updateMessages(prevState => [...prevState, newMessage])
            })
            updateName(tempName)
            await updateLoading(false)
            ulChat.current.scrollTop = ulChat.current.scrollHeight

            connection.start()
        }
        run();
    }, [])

    useEffect(() => {
        return () => {
            hub.stop()
        }
    }, [])

    return (
        <div>
            {loading ? (<div></div>) : (<><TopBanner name={name} />
                <TextCenter messages={messages} ulChat={ulChat} name={name} />
                <Footer addMessage={addMessage} chatMessage={chatMessage} chatMessageLabel={chatMessageLabel} /></>)}
        </div>
    )
}