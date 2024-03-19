import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';
import { InitialDialogsState } from '../../redux/dialog-reducer';
import { MapDispatchDialog } from './DialogsContainer';

type DialogsProps = MapDispatchDialog & InitialDialogsState

const Dialogs = (props:DialogsProps) => {
    let dialogElement = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />)
    let messageElement = props.messages.map(d => <Message message={d.message} key={d.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElement}
            </div>
            <div className={s.message}>
                {messageElement}
            </div>
            <div>
                <div>
                    <textarea  
                        onChange={props.onChangeHandler}
                        value={props.newMessageText}
                        ></textarea>
                </div>
                <button onClick={props.addMessage}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;