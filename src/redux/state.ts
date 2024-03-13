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

export type ProfileType = {
    posts: PostData[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsData[]
    messages: MessageData[]
}

export type StateDataType = {
    profilePage: ProfileType
    dialogsPage: DialogsPageType
}
export type ActionType = {
    type: 'ADD-POST' | 'NEW-POST-TEXT' | 'ADD-MESSAGE'
    payload?: string
}
export type StoreType = {
    _state: StateDataType
    getState: () => StateDataType
    _callSubscriber: (_state: StateDataType) => void
    // addPost: () => void
    // changePostText: (newText: string) => void
    // addMessage: (textMessage: string) => void
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
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State is change')
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
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }
        if (action.type === 'NEW-POST-TEXT') {
            if(action.payload)this._state.profilePage.newPostText = action.payload;
            this._callSubscriber(this._state)
        }
        if (action.type === 'ADD-MESSAGE') {
            if(action.payload){
            let newMessage: MessageData = {
                id: 3,
                message: action.payload,
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state)}
        }
    },
    // addPost() {
    //     let newPost: PostData = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state)
    // },
    // changePostText(newText: string) {

    // },
    // addMessage(textMessage: string) {
    //     let newMessage: MessageData = {
    //         id: 3,
    //         message: textMessage,
    //     }
    //     this._state.dialogsPage.messages.push(newMessage)
    //     this._callSubscriber(this._state)
    // },

}

//@ts-ignore
window.store = store