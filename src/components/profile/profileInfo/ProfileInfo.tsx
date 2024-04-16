import React from 'react';
import s from '../Profile.module.css'
import { ProfileProps } from '../ProfileContainer';
import userPhoto from '../../../assets/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png'


const ProfileInfo = (props:ProfileProps) => {
    return (
        <div>
            {/* <div>
                <img className={s.img} src='https://woorise.com/wp-content/uploads/2020/06/download-free-images.png' />
            </div> */}
            <div>
                <img src = {props.profile.photos.small ? props.profile.photos.large : userPhoto}/>
                description
            </div>
        </div>
    );
};

export default ProfileInfo;