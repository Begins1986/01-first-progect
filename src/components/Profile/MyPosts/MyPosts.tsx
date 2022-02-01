import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message={"hello"}/>
                <Post message={"hi"}/>
            </div>
        </div>
    );
};

export default MyPosts;