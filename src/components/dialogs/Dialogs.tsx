import React from 'react';
import s from './Dialogs.module.css'

type DialogsProps = {

}

const Dialogs: React.FC<DialogsProps> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>Dimytch</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Igor</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello, how your IT-KAMASUTRA</div>
                <div className={s.message}>It's too difficult</div>
                <div className={s.message}>yov yov you</div>
            </div>
        </div>
    );
};

export default Dialogs;