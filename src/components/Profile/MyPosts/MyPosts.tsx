import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: '"hello"', likeCount: 5},
        {id: 2, message: 'Hi', likeCount: 8},
        {id: 2, message: 'Hi', likeCount: 8},
        {id: 2, message: 'Hi', likeCount: 8},
    ]

    const postItem = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

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
                {/*<Post message={postData[0].message} likeCount={postData[0].likeCount}/>*/}
                {/*<Post message={postData[1].message} likeCount={postData[1].likeCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;