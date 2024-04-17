import React from 'react';
import { AppRootState } from '../../redux/redux-store';
import Profile from './Profile';
import { connect } from 'react-redux';
import axios from 'axios';
import { InitialProfileState, ProfileData, setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

type MapDispatchUsers = {
    setUserProfile: (profile: ProfileData) => void
}
export type ProfileProps = InitialProfileState & MapDispatchUsers

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileProps

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);