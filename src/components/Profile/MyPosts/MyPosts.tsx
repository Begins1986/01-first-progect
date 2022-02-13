import React from 'react';
import Post from "./Post/Post";
import {PostsType} from "../Profile";

export type MyPostPropsType = {
   posts: Array<PostsType>
}

const MyPosts = (props: MyPostPropsType) => {
    const postItem = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        <div>
            <div>MyPost</div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postItem}
            </div>
        </div>
    );
};

export default MyPosts;