import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'
import { PostData } from '../..';

type ProfileProps = {
    postData: PostData []
}

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png'/>
            <MyPosts postData = {props.postData}/>
        </div>        
    );
};

export default Profile;