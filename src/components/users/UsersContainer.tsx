import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppRootState } from "../../redux/redux-store";
import { InitialUsersState, UserData, followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from "../../redux/users-reducer";
import axios from "axios";
import React from "react";
import UsersC from "./UsersC";

export type MapDispatchUsers = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserData[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalCount: (totalCount:number) => void
}

type UsersProps = InitialUsersState & MapDispatchUsers
class UsersRespondContainer extends React.Component<UsersProps> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return(
        <UsersC onPageChanged={this.onPageChanged}
            totalUsersCount = {this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            
        />
        )
    }
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersRespondContainer)


