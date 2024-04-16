import React from 'react';
import s from '../profile/Profile.module.css'
import { MyPostsContainer } from './myPosts/MyPostsContainer';
import { AppRootState } from '../../redux/redux-store';
import { Dispatch } from 'redux';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { InitialProfileState, setUserProfile } from '../../redux/profile-reducer';

export type MapDispatchUsers = {
    setUserProfile: (profile: number) => void
}
type ProfileProps = InitialProfileState & MapDispatchUsers

class ProfileContainer extends React.Component<ProfileProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.userId)
            })
    }
    render(){
        return (
           <Profile />
        );
    }    
};

let mapStateToProps = (state:AppRootState):InitialProfileState => {
    return {
        profile: state.profilePage.profile,
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);