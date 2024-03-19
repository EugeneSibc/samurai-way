import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { InitialProfileState } from '../../../redux/profile-reducer';
import { MapDispatchProfile } from './MyPostsContainer';

type MyPostProps = InitialProfileState & MapDispatchProfile

const MyPosts: React.FC<MyPostProps> = (props) => {
    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={props.onPostChange}
                        value={props.newPostText}
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