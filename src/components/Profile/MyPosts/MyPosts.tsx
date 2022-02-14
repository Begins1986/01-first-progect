import React from 'react';
import Post from "./Post/Post";
import {PostsType} from "../Profile";

export type MyPostPropsType = {
   posts: Array<PostsType>
}

const MyPosts = (props: MyPostPropsType) => {
    const postItem = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostValue = React.createRef()

    let addPost = () => {
        let text=newPostValue.current.value
        alert(text)
    }

    return (
        <div>
            <div>MyPost</div>
            <div>
                <div>
                    <textarea ref={newPostValue}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postItem}
            </div>
        </div>
    );
};

export default MyPosts;