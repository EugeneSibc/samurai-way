
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type ActionType = FollowAC | UnfollowAC | SetUsersAC | SetCurrentPageAC | SetTotalCountAC

const initialUsersState = {
    users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage: 1
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
            return {...state, users: [...action.payload]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.payload}
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

export type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage:number) => ({type: 'SET-CURRENT-PAGE', payload:currentPage} as const)

export type SetTotalCountAC = ReturnType<typeof setTotalCountAC>
export const setTotalCountAC = (totalCount:number) => ({type: 'SET-TOTAL-COUNT', payload:totalCount} as const)

export default usersReducer;