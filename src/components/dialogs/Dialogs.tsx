import React from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';

type DialogsProps = {

}

let dialogsData = [
    { id: 1, name: 'Dimytch' },
    { id: 2, name: 'Viktor' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Igor' },
]
let messageData = [
    { id: 1, message: 'Hello, how your IT-KAMASUTRA' },
    { id: 2, message: 'Its too difficult' },
    { id: 3, message: 'yov yov you' },
    { id: 4, message: 'Please let me in' },
]


const Dialogs: React.FC<DialogsProps> = (props) => {
    let dialogElement = dialogsData.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageElement = messageData.map(d => <Message message={d.message} key={d.id}/>)
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