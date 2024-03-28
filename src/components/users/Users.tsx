import React from 'react';
import { InitialUsersState } from '../../redux/users-reducer';
import styled from "styled-components";
import { MapDispatchUsers } from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assets/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'

type UsersProps = InitialUsersState & MapDispatchUsers
const Users = (props: UsersProps) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
            {props.users.map(u => <StyledUsersPage key={u.id}>
                <span>
                    <div>
                        <StyledImg src={u.photos.small ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
};

export default Users;

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