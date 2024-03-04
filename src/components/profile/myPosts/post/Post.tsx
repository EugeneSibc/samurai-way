import React from 'react';
import s from './Post.module.css'

type PostProps = {
    message: string
    likesCount: number
}

const Post: React.FC<PostProps> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
            <div>{props.message} </div>
            <span>like {props.likesCount}</span>
        </div>
    );
};

export default Post;