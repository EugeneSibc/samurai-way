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
    isFetching: boolean
    followingInProgress: number []
}

export type ActionType = FollowAC |
    UnfollowAC |
    SetUsersAC |
    SetCurrentPageAC |
    SetTotalCountAC |
    ToggleIsFetchingAC |
    FollowingInProgressAC

const initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state: InitialUsersState = initialUsersState, action: ActionType): InitialUsersState => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.payload ? {
                        ...u, followed: true
                    } : u
                )
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.payload ? {
                        ...u, followed: false
                    } : u
                )
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...action.payload]
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        case "SET-TOTAL-COUNT": {
            return {
                ...state,
                totalUsersCount: action.payload
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case "FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.payload.fetching ?
                    [...state.followingInProgress, action.payload.id] :
                    state.followingInProgress.filter(id => id !== action.payload.id)
            }

        }
        default :
            return state
    }
}

export type FollowAC = ReturnType<typeof follow>
export const follow = (userId: number) => ({type: 'FOLLOW', payload: userId} as const)

export type UnfollowAC = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', payload: userId} as const)

export type SetUsersAC = ReturnType<typeof setUsers>
export const setUsers = (users: UserData[]) => ({type: 'SET-USERS', payload: users} as const)

export type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => (
    {
        type: 'SET-CURRENT-PAGE',
        payload: currentPage
    } as const
)

export type SetTotalCountAC = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => (
    {
        type: 'SET-TOTAL-COUNT',
        payload: totalCount
    } as const
)

export type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (fetching: boolean) => (
    {
        type: 'TOGGLE-IS-FETCHING',
        payload: fetching
    } as const
)

export type FollowingInProgressAC = ReturnType<typeof toggleFollowing>
export const toggleFollowing = (fetching: boolean, id: number) => ({
    type: 'FOLLOWING-IN-PROGRESS',
    payload: {
        fetching,
        id
    }
} as const)

export default usersReducer;