import React from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { PostsType } from '../../../redux/state';
import { ProfileProps } from '../Profile';

type MyPostsProps = {
    posts: PostsType
    ref:React.RefObject<HTMLInputElement>
}

const MyPosts: React.FC<ProfileProps> = (props) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    let addPost = () => {
        let text = newPostElement.current?.value;
        alert(text)
    }
    let postElement = props.state.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}>Add post</textarea>
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