import React from 'react';
import { InitialUsersState } from '../../redux/users-reducer';
import styled from "styled-components";
import { MapDispatchUsers } from './UsersContainer';

type UsersProps = InitialUsersState & MapDispatchUsers
const Users = (props: UsersProps) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: 'Shaleu',
                status: 'I/m very clever developer',
                followed: false,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3jsq0b635RYFriUE9701q62xueSuhxBN_ZOhVdqi8Q&s',
                location: {
                    country: 'Israel',
                    city: 'Tel Aviv'
                }
            },
            {
                id: 2,
                name: 'Slava',
                status: 'Don/t hug me I/m scared',
                followed: false,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3jsq0b635RYFriUE9701q62xueSuhxBN_ZOhVdqi8Q&s',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: 3,
                name: 'Dmitry',
                status: 'Yo yo yo samurai let/s go',
                followed: false,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3jsq0b635RYFriUE9701q62xueSuhxBN_ZOhVdqi8Q&s',
                location: {
                    country: 'Georjia',
                    city: 'Batumi'
                }
            },
            {
                id: 4,
                name: 'Ignat',
                status: 'So let/s do it',
                followed: false,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3jsq0b635RYFriUE9701q62xueSuhxBN_ZOhVdqi8Q&s',
                location: {
                    country: 'Armenia',
                    city: 'Erevan'
                }
            }
        ])
    }
    return (
        <div>
            {props.users.map(u => <StyledUsersPage key={u.id}>
                <span>
                    <div>
                        <StyledImg src={u.photoUrl} />
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
                    <UserTextBlock>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </UserTextBlock>

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
    width: 50vw;
    font-weight: 500;
`
const UserTextBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`
const UserStatus = styled.div`
    font-weight: 400;
    font-size: 15px;
`