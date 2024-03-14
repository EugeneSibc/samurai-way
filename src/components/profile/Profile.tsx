import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'
import { ActionType, ProfilePageType } from '../../redux/state';

export type ProfileProps = {
    state: ProfilePageType
    dispatch: (action: ActionType) => void
}

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png' />
            <MyPosts posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;