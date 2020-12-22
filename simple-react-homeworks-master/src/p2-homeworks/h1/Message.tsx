import React from "react";
import s from "./Message.module.css"


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <div>
                <img src={props.avatar}/>
                <div className={s.messages}>
                    <h4>{props.name}</h4>
                    <p>{props.message}{props.time}</p>
                </div>
            </div>
        </div>
    );
}

export default Message;
