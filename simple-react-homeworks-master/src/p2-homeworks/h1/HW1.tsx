import React from "react";
import "./Message";
import Message from "./Message";
import s from './Message.module.css';

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Artem",
    message: "NPM start нажимал?",
    time: " 22:00",
};


function HW1() {
    return (
        <div className={s.message}>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    );
}

export default HW1;
