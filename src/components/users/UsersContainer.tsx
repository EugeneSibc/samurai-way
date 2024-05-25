import {connect} from "react-redux";
import {AppRootState} from "../../redux/redux-store";
import {
    InitialUsersState,
    UserData,
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow, toggleFollowing,
    getUsers
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../preloader/Preloader";
import Users from "./Users";

export type MapDispatchUsers = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserData[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    toggleIsFetching: (fetching: boolean) => void
    toggleFollowing: (fetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersProps = InitialUsersState &
    MapDispatchUsers


class UsersRespondContainer extends React.Component<UsersProps> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)        
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   toggleFollowing={this.props.toggleFollowing}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootState): InitialUsersState => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalCount,
        toggleIsFetching,
        toggleFollowing,
        getUsers
    })(UsersRespondContainer)


