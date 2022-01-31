import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>Sergey</div>
                <div className={s.dialog}>Stassy</div>
                <div className={s.dialog}>Angel</div>
                <div className={s.dialog}>Zahar</div>
                <div className={s.dialog}>Olya</div>
                <div className={s.dialog}>Kostya</div>
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