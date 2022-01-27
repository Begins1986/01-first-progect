import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <img className={s.avatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGtUgLB8IdVBnpDGqfSpvwM_Fl6LOhjwnBw&usqp=CAU' alt="avatar"/>
            Post
            <div>like</div>
        </div>
    );
};

export default Post;