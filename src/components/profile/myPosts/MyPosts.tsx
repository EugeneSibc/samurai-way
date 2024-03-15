import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { ActionType, PostData } from '../../../redux/store';
import { addPostAC, newPostTextAC } from '../../../redux/profile-reducer';

type MyPostProps = {
    posts: PostData []
    newPostText:string
    dispatch: (action: ActionType) => void
}

const MyPosts: React.FC<MyPostProps> = (props) => {
    let addPost = () => {
            let action = addPostAC()
            props.dispatch(action)
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let action = newPostTextAC(e.currentTarget.value)
        props.dispatch(action)
    }
    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        value={props.newPostText}
                    >
                        
                    </textarea>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;