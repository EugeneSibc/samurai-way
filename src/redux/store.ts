import dialogReducer, { AddMessageAC, NewMessageTextAC } from "./dialog-reducer"
import profileReducer, { AddPostAC, NewPostTextAC } from "./profile-reducer"

export type MessageData = {
    id: number
    message: string
}
export type DialogsData = {
    id: number
    name: string
}
export type PostData = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostData[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsData[]
    messages: MessageData[]
    newMessageText: string
}

export type StateDataType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type StoreType = {
    _state: StateDataType
    getState: () => StateDataType
    _callSubscriber: (_state: StateDataType) => void
    subscribe: (observer: (_state: StateDataType) => void) => void
    dispatch: (action: any) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi Im there', likesCount: 5 },
                { id: 2, message: 'Its my first post', likesCount: 12 },
            ],
            newPostText: 'Add post'
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('State is change')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    },

}

//@ts-ignore
window.store = store