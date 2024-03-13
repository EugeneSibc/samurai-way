import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { ActionType, PostData, ProfileType } from '../../../redux/state';

type MyPostProps = {
    posts: PostData []
    newPostText:string
    dispatch: (action: ActionType) => void
}

const MyPosts: React.FC<MyPostProps> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
            props.dispatch({type:'ADD-POST'})
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'NEW-POST-TEXT', payload:e.currentTarget.value})
    }
    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}
                        onChange={onPostChange}
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