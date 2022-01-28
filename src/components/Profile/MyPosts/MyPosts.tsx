import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
                <div>MyPost</div>
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    <Post message={"hello"}/>
                    <Post message={"hi"}/>

                </div>
        </div>
    );
};

export default MyPosts;