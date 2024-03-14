type MessageData = {
    id: number
    message: string
}
type DialogsData = {
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
export type ActionType = AddPostAC | NewPostTextAC | AddMessageAC | NewMessageTextAC

export type StoreType = {
    _state: StateDataType
    getState: () => StateDataType
    _callSubscriber: (_state: StateDataType) => void
    subscribe: (observer: (_state: StateDataType) => void) => void
    dispatch: (action: ActionType) => void
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
        if (action.type === 'ADD-POST') {
            let newPost: PostData = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            if (this._state.profilePage.newPostText) {
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state)
            }
        }
        if (action.type === 'NEW-POST-TEXT') {
            if (action.payload) this._state.profilePage.newPostText = action.payload;
            this._callSubscriber(this._state)
        }
        if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageData = {
                id: 3,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        if (action.type === 'NEW-MESSAGE-TEXT') {
            if (action.payload) this._state.dialogsPage.newMessageText = action.payload;
            this._callSubscriber(this._state)
        }
    },

}
type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = () => ({ type: 'ADD-POST' } as const)

type NewPostTextAC = ReturnType<typeof newPostTextAC>
export const newPostTextAC = (newText: string) => ({ type: 'NEW-POST-TEXT', payload: newText } as const)

type AddMessageAC = ReturnType<typeof addMessageAC>
export const addMessageAC = () => ({ type: 'ADD-MESSAGE' } as const)

type NewMessageTextAC = ReturnType<typeof newMessageTextAC>
export const newMessageTextAC = (text: string) => ({ type: 'NEW-MESSAGE-TEXT', payload: text } as const)

//@ts-ignore
window.store = store