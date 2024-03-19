import React from 'react';
import s from '../profile/Profile.module.css'
import { ActionType, ProfilePageType } from '../../redux/store';
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { AppRootState } from '../../redux/redux-store';

export type ProfileProps = {
    store: AppRootState
    dispatch:(action:any)=>void
}

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png' />
            <MyPostsContainer store={props.store} dispatch={props.dispatch}
                
            />
        </div>
    );
};

export default Profile;