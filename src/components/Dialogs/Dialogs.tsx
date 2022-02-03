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
    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Stassy'},
        {id: 3, name: 'Angel'},
        {id: 4, name: 'Zahar'},
        {id: 5, name: 'Olya'},
        {id: 6, name: 'Kostya'},
    ]

    let messagesData = [
        {id: 1, name: 'Hello'},
        {id: 2, name: 'Hi'},
        {id: 3, name: 'Yo'},
        {id: 4, name: 'Yo'},
        {id: 5, name: 'Yo'},
        {id: 6, name: 'Yo'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

                {/*<DialogItem name={'Sergey'} id={1}/>*/}
                {/*<DialogItem name={'Stassy'} id={2}/>*/}
                {/*<DialogItem name={'Angel'} id={3}/>*/}
                {/*<DialogItem name={'Zahar'} id={4}/>*/}
                {/*<DialogItem name={'Olya'} id={5}/>*/}
                {/*<DialogItem name={'Kostya'} id={6}/>*/}
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].name}/>
                <Message message={messagesData[1].name}/>
                {/*<Message message={'Hi'}/>*/}
                {/*<Message message={'Yo'}/>*/}
                {/*<Message message={'Super'}/>*/}
            </div>
        </div>
    );
};

export default Dialogs;