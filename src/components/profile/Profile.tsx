import React from 'react';
import s from '../profile/Profile.module.css'
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { ActionType, AppRootState } from '../../redux/redux-store';

export type ProfileProps = {
    store: AppRootState
    dispatch:(action:ActionType)=>void
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