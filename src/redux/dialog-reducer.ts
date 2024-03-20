import { ActionType } from "./profile-reducer";

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

type Dialogs = {
    id: number
    name: string
}
type Message = {
    id: number
    message: string
}
export type InitialDialogsState = {
    dialogs: Dialogs[]
    messages: Message[]
    newMessageText: string
}
const dialogReducer = (state: InitialDialogsState = initialState, action: ActionType): InitialDialogsState => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage: Message = {
                id: 5,
                message: state.newMessageText,
            }
            let stateCopy = { ...state, messages: [...state.messages] }
            stateCopy.messages.push(newMessage)
            stateCopy.newMessageText = ''
            return stateCopy;
        }
        case 'NEW-MESSAGE-TEXT': {
            let stateCopy = { ...state }
            stateCopy.newMessageText = action.payload;
            return stateCopy
        }
        default: return state
    }
}

export type AddMessageAC = ReturnType<typeof addMessageAC>
export const addMessageAC = () => ({ type: 'ADD-MESSAGE' } as const)

export type NewMessageTextAC = ReturnType<typeof newMessageTextAC>
export const newMessageTextAC = (text: string) => ({ type: 'NEW-MESSAGE-TEXT', payload: text } as const)

export default dialogReducer;