import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'
import { PostsType } from '../../redux/state';

export type ProfileProps = {
    state: PostsType
    addPost: (textMessage:string) => void
}

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png'/>
            <MyPosts state = {props.state} addPost={props.addPost}/>
        </div>        
    );
};

export default Profile;