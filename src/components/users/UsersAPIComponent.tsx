import React, { Component } from 'react';
import { InitialUsersState } from '../../redux/users-reducer';
import { MapDispatchUsers } from './UsersContainer';
import axios from 'axios';
import UsersC from './UsersC';

type UsersProps = InitialUsersState & MapDispatchUsers
class UsersAPIComponent extends React.Component<UsersProps> {
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

export default UsersAPIComponent;

