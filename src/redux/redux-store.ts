import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, { AddPostAC, NewPostTextAC } from "./profile-reducer";
import dialogReducer, { AddMessageAC, NewMessageTextAC } from "./dialog-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducers, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducers>
//@ts-ignore
window.store = store