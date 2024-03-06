import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'
import { PostsType } from '../../redux/state';

export type ProfileProps = {
    state: PostsType
}

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png'/>
            <MyPosts state = {props.state}/>
        </div>        
    );
};

export default Profile;