import React, { Component } from 'react';
import { InitialUsersState } from '../../redux/users-reducer';
import { MapDispatchUsers } from './UsersContainer';
import axios from 'axios';
import styled from 'styled-components';
import style from './Users.module.css'
import userPhoto from '../../assets/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'


type UsersProps = InitialUsersState & MapDispatchUsers
class UsersC extends React.Component<UsersProps> {
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = []
        for (let i = 1; i <= 40; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? style.selectedPage : style.page}
                            onClick={() => { this.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                {this.props.users.map(u => <StyledUsersPage key={u.id}>
                    <span>
                        <div>
                            <StyledImg src={u.photos.small ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <UserItems>
                        <UserTextBlock>
                            <div>{u.name}</div>
                            <UserStatus>{u.status}</UserStatus>
                        </UserTextBlock>
                        {/* <UserTextBlock>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </UserTextBlock> */}

                    </UserItems>

                </StyledUsersPage>
                )}
            </div>
        );
    }
}

export default UsersC;

const PaginationStyle = styled.span`
    margin: 0 5px;
    
    :active{
        font-weight: bold;
    }
`

const StyledUsersPage = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 10px;
`
const StyledImg = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 40px;
`
const UserItems = styled.span`
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    margin: 0 10px;
    height: 80px;
    width: 25vw;
    font-weight: 500;
`
const UserTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const UserStatus = styled.div`
    font-weight: 400;
    font-size: 12px;
`