import { AddMessageAC, NewMessageTextAC } from './dialog-reducer'

export type ActionType = AddPostAC | NewPostTextAC | SetUserProfileAC

let initialState = {
    posts: [
        { id: 1, message: 'Hi Im there', likesCount: 5 },
        { id: 2, message: 'Its my first post', likesCount: 12 },
    ],
    newPostText: 'Add post',
    profile: {
        userId:2,
        fullName: 'name',
        photos:{}
    }
}
type ProfileData = {
    userId: number
    lookingForAJob?: boolean  
    lookingForAJobDescription?: string
    fullName: string
    contacts?: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small?: string
        large?: string
    }
}
type Post = {
    id: number
    message: string
    likesCount: number
}
export type InitialProfileState = {
    posts: Post[]
    newPostText: string
    profile: ProfileData
}
const profileReducer = (state: InitialProfileState = initialState, action: ActionType): InitialProfileState => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: Post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return state.newPostText ? {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            } : state
        }
        case 'NEW-POST-TEXT': {
            return { ...state, newPostText: action.payload }
        }
        case 'SET-USER-PROFILE': {
            return { ...state, profile: {...state.profile, userId:action.payload}  }
        }
        default: return state;
    }
}

export type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = () => ({ type: 'ADD-POST' } as const)

export type NewPostTextAC = ReturnType<typeof newPostTextAC>
export const newPostTextAC = (newText: string) => ({ type: 'NEW-POST-TEXT', payload: newText } as const)

export type SetUserProfileAC = ReturnType<typeof setUserProfile>
export const setUserProfile = (userId: number) => ({ type: 'SET-USER-PROFILE', payload: userId } as const)

export default profileReducer;