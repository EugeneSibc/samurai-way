 type MessageData = {
    id: number
    message: string
}
type DialogsData = {
    id: number
    name: string
}
type PostData = {
    id: number
    message: string
    likesCount: number
}

export type PostsType = {
    posts: PostData[]
}

export type DialogsPageType = {
    dialogs:DialogsData[]
    messages:MessageData[]
}

export type StateDataType = {
    profilePage: PostsType
    dialogsPage: DialogsPageType
}



export const state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi Im there', likesCount: 5 },
            { id: 2, message: 'Its my first post', likesCount: 12 },
        ]
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
    }
}