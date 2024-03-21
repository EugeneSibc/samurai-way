import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppRootState } from "../../redux/redux-store";
import { InitialUsersState, UserData, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";

type MapDispatchUsers = {
    followed: (userId: number) => void
    unfollowed: (userId: number) => void
    setUsers: (users: UserData[]) => void
}
let mapStateToProps = (state: AppRootState): InitialUsersState => {
    return {
        users: state.usersPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchUsers => {
    return {
        followed(userId){
            dispatch(followAC(userId))
        },
        unfollowed(userId){
            dispatch(unfollowAC(userId))
        },
        setUsers(users){
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

function followAC(userId: number): any {
    throw new Error("Function not implemented.");
}
