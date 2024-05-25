import { Dispatch } from "redux"
import { usersAPI } from "../api/api"

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
                    u.id === action.userId ? {
                        ...u, followed: true
                    } : u
                )
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {
                        ...u, followed: false
                    } : u
                )
            }
        }
        case "SET-USERS": {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-COUNT": {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state,
                isFetching: action.fetching
            }
        }
        case "FOLLOWING-IN-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.fetching ?
                    [...state.followingInProgress, action.id] :
                    state.followingInProgress.filter(id => id !== action.id)
            }

        }
        default :
            return state
    }
}

export const getUsersTC = (currentPage:number, pageSize:number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
        })
}

export type FollowAC = ReturnType<typeof follow>
export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export type UnfollowAC = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export type SetUsersAC = ReturnType<typeof setUsers>
export const setUsers = (users: UserData[]) => ({type: 'SET-USERS', users} as const)
export type SetCurrentPageAC = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export type SetTotalCountAC = ReturnType<typeof setTotalCount>
export const setTotalCount = (totalCount: number) => ({type: 'SET-TOTAL-COUNT', totalCount} as const)
export type ToggleIsFetchingAC = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (fetching: boolean) => ({ type: 'TOGGLE-IS-FETCHING', fetching} as const)
export type FollowingInProgressAC = ReturnType<typeof toggleFollowing>
export const toggleFollowing = (fetching: boolean, id: number) => ({ type: 'FOLLOWING-IN-PROGRESS', fetching, id} as const)

export default usersReducer;