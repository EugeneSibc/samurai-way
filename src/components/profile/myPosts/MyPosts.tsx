import React from 'react';
import s from './MyPosts.module.css'
import Post from './post/Post';

type PostData ={
    id: number
    message: string
    likesCount: number
}
type MyPostsProps = {
    data: PostData []
}



const MyPosts: React.FC<MyPostsProps> = (props) => {
    let postElement = props.data.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)
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