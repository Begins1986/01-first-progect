import message from "../components/Dialogs/Message/Message";
import {rerenderEntierTree} from "../render";
import {PostsType} from "../components/Profile/Profile";
import {DialogProps, MessageProps} from "../components/Dialogs/Dialogs";

export type stateType = {
        profilePage:{
            posts: Array<PostsType>
            newPost: string
        }
        messagePage: {
            dialogs: Array<DialogProps>
            messages: Array<MessageProps>
        }
}

export const state = {
    profilePage: {
        posts: [
            {id: 1, message: '"hello"', likeCount: 5},
            {id: 2, message: 'Hi', likeCount: 8},
            {id: 2, message: 'Hi', likeCount: 8},
            {id: 2, message: 'Hi', likeCount: 8},
        ],
        newPost: ''
    },
    messagePage: {
        dialogs: [
            {id: 1, name: 'Sergey'},
            {id: 2, name: 'Stassy'},
            {id: 3, name: 'Angel'},
            {id: 4, name: 'Zahar'},
            {id: 5, name: 'Olya'},
            {id: 6, name: 'Kostya'},
        ],
        messages: [
            {id: 1, name: 'Hello'},
            {id: 2, name: 'Hi'},
            {id: 3, name: 'Yo'},
            {id: 4, name: 'Yo'},
            {id: 5, name: 'Yo'},
            {id: 6, name: 'Yo'},
        ],
    },
}

export const addPost = ()=>{
    let newPost={
        id: 5,
        message: state.profilePage.newPost,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPost=''
    rerenderEntierTree(state)
    console.log(state)
}

export const addNewPost = (newPost: string)=>{
    state.profilePage.newPost = newPost
    rerenderEntierTree(state)
    console.log(state)
}