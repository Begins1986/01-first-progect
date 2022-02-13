import React from 'react';
import s from "../Dialogs.module.css";
import {MessageProps} from "../Dialogs";

const Message = (props: MessageProps) => {
    return <div className={s.message}>{props.name}</div>
}

export default Message;