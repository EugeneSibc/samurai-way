import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'

type ProfileProps = {

}

const Profile: React.FC<ProfileProps> = () => {
    return (
        <div className={s.content}>
            <img src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png'/>
            <MyPosts/>
        </div>
        
    );
};

export default Profile;