import React, { ChangeEvent } from 'react';
import { InitialDialogsState, addMessageAC, newMessageTextAC } from '../../redux/dialog-reducer';
import { AppRootState } from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export type MapDispatchDialog = {
    addMessage: () => void
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
let mapStateToProps = (state: AppRootState): InitialDialogsState => {
    return {
        dialogs:state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchDialog => {
    return {
        addMessage: () => {
            let action = addMessageAC()
            dispatch(action)
        },
        onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            let action = newMessageTextAC(text)
            dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
