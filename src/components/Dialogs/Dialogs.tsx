import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogProps = {
    name: string
    id: number
}

export type MessageProps = {
    id?: number
    name: string
}

export type DiologMessegeProps = {
    dialogs: Array<DialogProps>
    messages: Array<MessageProps>
}


const Dialogs = (props: DiologMessegeProps ) => {


    const dialogsItem = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageItem = props.messages.map(m => <Message name={m.name}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messageItem}
            </div>
        </div>
    );
};

export default Dialogs;