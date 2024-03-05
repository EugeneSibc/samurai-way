import React from 'react';
import MyPosts from './myPosts/MyPosts';
import s from '../profile/Profile.module.css'

type ProfileProps = {

}
let postData = [
    { id: 1, message: 'Hi Im there', likesCount: 5 },
    { id: 2, message: 'Its my first post', likesCount: 12 },
]
const Profile: React.FC<ProfileProps> = () => {
    return (
        <div>
            <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png'/>
            <MyPosts data = {postData}/>
        </div>        
    );
};

export default Profile;