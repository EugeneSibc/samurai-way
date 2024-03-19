import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { InitialProfileState, addPostAC, newPostTextAC } from '../../../redux/profile-reducer';
import { AppRootState } from '../../../redux/redux-store';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export type MapDispatchProfile = {
    addPost: () => void
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

let mapStateToProps = (state: AppRootState): InitialProfileState => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }

}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchProfile => {
    return {
        addPost() {
            let action = addPostAC()
            dispatch(action)
        },
        onPostChange(e: ChangeEvent<HTMLTextAreaElement>) {
            let action = newPostTextAC(e.currentTarget.value)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)