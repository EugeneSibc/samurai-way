import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';
import { ActionType } from '../../redux/store';
import { InitialStateType, addMessageAC, newMessageTextAC } from '../../redux/dialog-reducer';
import { AppRootState } from '../../redux/redux-store';

type DialogsProps = {
    dialogsPage: InitialStateType
    addMessage: () => void
    onChangeHandler: (e:ChangeEvent<HTMLTextAreaElement>) => void
}

const Dialogs: React.FC<DialogsProps> = (props) => {
    

    let dialogElement = props.dialogsPage.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />)
    let messageElement = props.dialogsPage.messages.map(d => <Message message={d.message} key={d.id} />)
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
                        value={props.dialogsPage.newMessageText}
                        ></textarea>
                </div>
                <button onClick={props.addMessage}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;