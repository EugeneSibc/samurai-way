import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppRootState } from "../../redux/redux-store";
import { InitialUsersState, UserData, followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import UsersAPIComponent from "./UsersAPIComponent";

export type MapDispatchUsers = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserData[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalCount: (totalCount:number) => void
}
let mapStateToProps = (state: AppRootState): InitialUsersState => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchUsers => {
    return {
        follow(userId){
            dispatch(followAC(userId))
        },
        unfollow(userId){
            dispatch(unfollowAC(userId))
        },
        setUsers(users){
            dispatch(setUsersAC(users))
        },
        setCurrentPage(currentPage){
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount(totalCount){
            dispatch(setTotalCountAC(totalCount))
        }

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


