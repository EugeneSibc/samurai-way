import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';
import { ActionType, DialogsPageType } from '../../redux/state';
import { addMessageAC, newMessageTextAC } from '../../redux/dialog-reducer';

type DialogsProps = {
    state: DialogsPageType
    dispatch: (action: ActionType) => void
}

const Dialogs: React.FC<DialogsProps> = (props) => {
    let addMessage = () => {
            let action = addMessageAC()
            props.dispatch(action)
    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = newMessageTextAC(text)
        props.dispatch(action)
    }

    let dialogElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />)
    let messageElement = props.state.messages.map(d => <Message message={d.message} key={d.id} />)
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
                        onChange={onChangeHandler}
                        value={props.state.newMessageText}
                        ></textarea>
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    );
};

export default Dialogs;