import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'
import { ProfileType } from '../../redux/state';

export type ProfileProps = {
    state: ProfileType
    addPost: () => void
    changePostText: (newText: string) => void
}

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png' />
            <MyPosts posts={props.state.posts}
                newPostText={props.state.newPostText}
                
                addPost={props.addPost}
                changePostText={props.changePostText}
                />
        </div>
    );
};

export default Profile;