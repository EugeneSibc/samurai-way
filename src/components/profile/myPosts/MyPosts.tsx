import React from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';

type MyPostsProps = {

}

const MyPosts: React.FC<MyPostsProps> = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi I'm there" 
                    likesCount={5}/>
                <Post message="It's my first post" 
                    likesCount={12}/>
            </div>
        </div>
    );
};

export default MyPosts;