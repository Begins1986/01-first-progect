import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Stassy</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Angel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Zahar</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Olya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Kostya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Super!</div>
            </div>
        </div>
    );
};

export default Dialogs;