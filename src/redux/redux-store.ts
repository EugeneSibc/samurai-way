import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

export const store = createStore(rootReducers)

export type AppRootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store