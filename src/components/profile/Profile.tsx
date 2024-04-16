import React from 'react';
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import ProfileInfo from './profileInfo/ProfileInfo';
import { ProfileProps } from './ProfileContainer';


const Profile = (props: ProfileProps) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;