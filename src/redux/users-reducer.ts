
type LocationData = {
    country: string
    city: string    
}
export type UserData = {
    id: number
    name: string
    status: string
    followed: boolean
    photos: PhotoSize
    location: LocationData
}
type PhotoSize = {
    small: string
    large: string
}
export type InitialUsersState = {
    users: UserData []
}

export type ActionType = FollowAC | UnfollowAC | SetUsersAC

const initialUsersState = {
    users:[]
};

const usersReducer = (state:InitialUsersState = initialUsersState, action: ActionType):InitialUsersState => {
    switch(action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: true} : u)}                 
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.payload]}
        }
        default : return state
    }
}

export type FollowAC = ReturnType<typeof followAC>
export const followAC = (userId:number) => ({type: 'FOLLOW', payload:userId} as const)

export type UnfollowAC = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId:number) => ({type: 'UNFOLLOW', payload:userId} as const)

export type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users:UserData[]) => ({type: 'SET-USERS', payload:users} as const)

export default usersReducer;