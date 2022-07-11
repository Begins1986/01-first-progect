import React, {ChangeEvent, useState} from 'react';
import Post from "./Post/Post";
import {PostsType} from "../Profile";
import message from "../../Dialogs/Message/Message";

export type MyPostPropsType = {
   posts: Array<PostsType>
    addPost: (message: string)=>void
}

const MyPosts = (props: MyPostPropsType) => {
    const postItem = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    // let [newPostValue, setNewPostValue] = useState<string>('')
    //
    // let onChangeNewPostHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //     setNewPostValue(e.currentTarget.value)
    // }

    const newPostValue = React.createRef<HTMLTextAreaElement>()

    let addPostHandler = () => {
        if(newPostValue.current?.value){
            props.addPost(newPostValue.current.value)
            newPostValue.current.value=''
        }

        // alert(newPostValue.current?.value)
        // setNewPostValue('')
    }

    return (
        <div>
            <div>MyPost</div>
            <div>
                <div>
                    <textarea
                        ref={newPostValue}
                        // onChange={(e)=>{setNewPostValue(e.currentTarget.value)}}
                        // onChange={onChangeNewPostHandler}
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