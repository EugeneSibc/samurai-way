import { ActionType, DialogsPageType, MessageData, store } from "./state";


// let state = store.getState().dialogsPage
const dialogReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
        let newMessage: MessageData = {
                id: 3,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'NEW-MESSAGE-TEXT':
        if (action.payload) state.newMessageText = action.payload;
            return state
        default : return state
    }
}

export type AddMessageAC = ReturnType<typeof addMessageAC>
export const addMessageAC = () => ({ type: 'ADD-MESSAGE' } as const)

export type NewMessageTextAC = ReturnType<typeof newMessageTextAC>
export const newMessageTextAC = (text: string) => ({ type: 'NEW-MESSAGE-TEXT', payload: text } as const)

export default dialogReducer;