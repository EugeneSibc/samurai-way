import axios from "axios"
import { Dispatch } from "redux"

export type AuthUserData = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth: false
}
type ActionCreators = SetAuthUserDataAC

export const authReducer = (state: AuthUserData = initialState, action: ActionCreators) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const authUserData = () => (dispatch: Dispatch) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(res => {
                if(res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
}

export type SetAuthUserDataAC = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: 'SET-AUTH-USER-DATA',
    data: {
        id,
        email,
        login
    }
})