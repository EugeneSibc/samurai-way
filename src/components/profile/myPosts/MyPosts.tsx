import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { ActionType, PostData } from '../../../redux/store';
import { InitialStateType, addPostAC, newPostTextAC } from '../../../redux/profile-reducer';

type MyPostProps = {
    profilePage:InitialStateType
    addPost: () => void
    onPostChange: (e:ChangeEvent<HTMLTextAreaElement>) => void
}

const MyPosts: React.FC<MyPostProps> = (props) => {
    let postElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={props.onPostChange}
                        value={props.profilePage.newPostText}
                    >
                        
                    </textarea>
                </div>
                <button onClick={props.addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;