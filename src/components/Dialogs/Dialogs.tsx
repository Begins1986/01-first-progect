import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogProps = {
    name: string
    id: number
}

type MessageProps = {
    message: string
}

const DialogItem = (props: DialogProps) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageProps) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={'Sergey'} id={1}/>
                <DialogItem name={'Stassy'} id={2}/>
                <DialogItem name={'Angel'} id={3}/>
                <DialogItem name={'Zahar'} id={4}/>
                <DialogItem name={'Olya'} id={5}/>
                <DialogItem name={'Kostya'} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'Hi'}/>
                <Message message={'Yo'}/>
                <Message message={'Super'}/>
            </div>
        </div>
    );
};

export default Dialogs;