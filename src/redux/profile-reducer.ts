import { ActionType, PostData, ProfilePageType, store } from './state'

// let state = store.getState().profilePage
const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPost: PostData = {
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