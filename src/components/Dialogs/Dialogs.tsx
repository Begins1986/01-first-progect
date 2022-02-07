import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogProps = {
    name: string
    id: number
}

export type MessageProps = {
    message: string
}


const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Stassy'},
        {id: 3, name: 'Angel'},
        {id: 4, name: 'Zahar'},
        {id: 5, name: 'Olya'},
        {id: 6, name: 'Kostya'},
    ]
    let messages = [
        {id: 1, name: 'Hello'},
        {id: 2, name: 'Hi'},
        {id: 3, name: 'Yo'},
        {id: 4, name: 'Yo'},
        {id: 5, name: 'Yo'},
        {id: 6, name: 'Yo'},
    ]

    const dialogsItem = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messageItem = messages.map(m => <Message message={m.name}/>)

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