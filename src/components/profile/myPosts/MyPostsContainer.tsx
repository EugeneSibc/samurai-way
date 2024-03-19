import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { ActionType, PostData } from '../../../redux/store';
import { addPostAC, newPostTextAC } from '../../../redux/profile-reducer';
import { AppRootState } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

type MyPostProps = {
    store: AppRootState
    dispatch:(action:any)=>void
}

export const MyPostsContainer: React.FC<MyPostProps> = (props) => {
    let addPost = () => {
            let action = addPostAC()
            props.dispatch(action)
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let action = newPostTextAC(e.currentTarget.value)
        props.dispatch(action)
    }
    return (
        <MyPosts profilePage={props.store.profilePage}
            addPost={addPost}
            onPostChange={onPostChange}/>
    );
};

