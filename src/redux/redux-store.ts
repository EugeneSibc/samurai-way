import { combineReducers, createStore } from "redux";
import profileReducer, { AddPostAC, NewPostTextAC } from "./profile-reducer";
import dialogReducer, { AddMessageAC, NewMessageTextAC } from "./dialog-reducer";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

export const store = createStore(rootReducers)

export type AppRootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch
export type ActionType = AddPostAC | NewPostTextAC | AddMessageAC | NewMessageTextAC
//@ts-ignore
window.store = store