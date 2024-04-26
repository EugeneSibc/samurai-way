import React, {Component} from 'react';
import {InitialUsersState, UserData} from '../../redux/users-reducer';
import {MapDispatchUsers} from './UsersContainer';
import axios from 'axios';
import styled from 'styled-components';
import style from './Users.module.css'
import userPhoto
    from '../../assets/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'
import {NavLink} from 'react-router-dom';


type UsersProps = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserData[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void

}

const Users = (props: UsersProps) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= 50; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? style.selectedPage : style.page}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <StyledUsersPage key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <StyledImg src={u.photos.small ? u.photos.small : userPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '80165270-2247-469b-804e-2f4f4cafc85a'
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })


                            }
                            }>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '80165270-2247-469b-804e-2f4f4cafc85a'
                                        }
                                    })
                                    .then(response => {

                                    })

                                props.follow(u.id)
                            }}>Follow</button>}
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


export default Users;

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