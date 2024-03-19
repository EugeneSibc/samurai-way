import React, { ChangeEvent } from 'react';
import s from './Dialogs.module.css'
import { DialogsItem } from './dialogsItem/DialogsItem';
import { Message } from './message/Message';
import { ActionType } from '../../redux/store';
import { addMessageAC, newMessageTextAC } from '../../redux/dialog-reducer';
import { AppDispatch, AppRootState } from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsProps = {
    store: AppRootState
    dispatch: any
}

const DialogsContainer: React.FC<DialogsProps> = (props) => {
    let addMessage = () => {
            let action = addMessageAC()
            props.dispatch(action)
    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = newMessageTextAC(text)
        props.dispatch(action)
    }

    return (
        <Dialogs dialogsPage={props.store.dialogsPage} 
        addMessage={addMessage}
        onChangeHandler = {onChangeHandler}/>
    );
};

export default DialogsContainer;