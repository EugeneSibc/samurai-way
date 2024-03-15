import { ActionType, DialogsPageType, MessageData, store } from "./store";

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimytch' },
        { id: 2, name: 'Viktor' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Igor' },
    ],
    messages: [
        { id: 1, message: 'Hello, how your IT-KAMASUTRA' },
        { id: 2, message: 'Its too difficult' },
        { id: 3, message: 'yov yov you' },
        { id: 4, message: 'Please let me in' },
    ],
    newMessageText: 'Add message'
}

const dialogReducer = (state: DialogsPageType = initialState, action: ActionType) => {
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