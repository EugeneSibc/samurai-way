import React from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';
import { DialogsData, MessageData } from '../..';

type DialogsProps = {
    dialogsData:DialogsData []
    messageData:MessageData []
}

const Dialogs: React.FC<DialogsProps> = (props) => {
    let dialogElement = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageElement = props.messageData.map(d => <Message message={d.message} key={d.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;