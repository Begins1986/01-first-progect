import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

export type PostsType = {
    id: number
    message: string
    likeCount: number
}

export type PropsType = {
    state:{
        posts: Array<PostsType>
    }
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

export default Profile;