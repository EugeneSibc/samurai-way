import React from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';
import { PostData } from '../../..';

type MyPostsProps = {
    postData: PostData []
}

const MyPosts: React.FC<MyPostsProps> = (props) => {
    let postElement = props.postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
};

export default MyPosts;