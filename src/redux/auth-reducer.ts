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
export type SetAuthUserDataAC = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: 'SET-AUTH-USER-DATA',
    data: {
        id,
        email,
        login
    }
})