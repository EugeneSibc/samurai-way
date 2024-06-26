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

export type ActionType =  AddMessageAC | NewMessageTextAC

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
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: state.newMessageText }],
                newMessageText: ''
            };
        }
        case 'NEW-MESSAGE-TEXT': {
            return { ...state, newMessageText: action.payload }
        }
        default: return state
    }
}

export type AddMessageAC = ReturnType<typeof addMessageAC>
export const addMessageAC = () => ({ type: 'ADD-MESSAGE' } as const)

export type NewMessageTextAC = ReturnType<typeof newMessageTextAC>
export const newMessageTextAC = (text: string) => ({ type: 'NEW-MESSAGE-TEXT', payload: text } as const)

export default dialogReducer;