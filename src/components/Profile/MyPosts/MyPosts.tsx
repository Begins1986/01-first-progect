import React, {useState} from 'react';
import Post from "./Post/Post";
import {PostsType} from "../Profile";

export type MyPostPropsType = {
   posts: Array<PostsType>
}

const MyPosts = (props: MyPostPropsType) => {
    const postItem = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let [newPostValue, setNewPostValue] = useState<string>('')

    let addPostHandler = () => {
        alert(newPostValue)
        setNewPostValue('')
    }

    return (
        <div>
            <div>MyPost</div>
            <div>
                <div>
                    <textarea
                        value={newPostValue}
                        onChange={(e)=>{setNewPostValue(e.currentTarget.value)}}
                    />
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div>
                {postItem}
            </div>
        </div>
    );
};

export default MyPosts;