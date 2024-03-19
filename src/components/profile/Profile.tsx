import React from 'react';
import s from '../profile/Profile.module.css'
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { AppRootState } from '../../redux/redux-store';
import { Dispatch } from 'redux';



const Profile = () => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png' />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;