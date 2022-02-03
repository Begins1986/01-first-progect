import React from 'react';
import s from './Post.module.css'

export type messageProps ={
    message: string
    likeCount: number
}

const Post = (props: messageProps) => {
    return (
        <div>
            <img className={s.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGtUgLB8IdVBnpDGqfSpvwM_Fl6LOhjwnBw&usqp=CAU' alt="avatar"/>
            Post
            <div>{props.message}</div>
            <div>Like {props.likeCount}</div>
        </div>
    );
};

export default Post;