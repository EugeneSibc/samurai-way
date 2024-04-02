import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppRootState } from "../../redux/redux-store";
import { InitialUsersState, UserData, followAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import UsersC from "./UsersC";

export type MapDispatchUsers = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserData[]) => void
}
let mapStateToProps = (state: AppRootState): InitialUsersState => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)


