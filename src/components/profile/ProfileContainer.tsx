import React from 'react';
import { AppRootState } from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { InitialProfileState, setUserProfile } from '../../redux/profile-reducer';

type MapDispatchUsers = {
    setUserProfile: (profile: number) => void
}
export type ProfileProps = InitialProfileState & MapDispatchUsers

class ProfileContainer extends React.Component<ProfileProps> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render(){
        return (
           <Profile {...this.props}/>
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