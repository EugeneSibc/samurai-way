import { AddMessageAC, NewMessageTextAC } from './dialog-reducer'

export type ActionType = AddPostAC | NewPostTextAC | AddMessageAC | NewMessageTextAC

let initialState = {
    posts: [
        { id: 1, message: 'Hi Im there', likesCount: 5 },
        { id: 2, message: 'Its my first post', likesCount: 12 },
    ],
    newPostText: 'Add post'
}

type Post = {
    id: number
    message: string
    likesCount: number
}
export type InitialProfileState = {
    posts: Post []
    newPostText: string
}
const profileReducer = (state:InitialProfileState = initialState, action: ActionType):InitialProfileState => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: Post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            if (state.newPostText) {
                state.posts.push(newPost)
                state.newPostText = '';
            }
            return state

        case 'NEW-POST-TEXT':
            if (action.payload) state.newPostText = action.payload;
            return state
        default: return state;    
    }
}

export type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = () => ({ type: 'ADD-POST' } as const)

export type NewPostTextAC = ReturnType<typeof newPostTextAC>
export const newPostTextAC = (newText: string) => ({ type: 'NEW-POST-TEXT', payload: newText } as const)

export default profileReducer;