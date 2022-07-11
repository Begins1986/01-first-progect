import message from "../components/Dialogs/Message/Message";
import {rerenderEntierTree} from "../index";

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: '"hello"', likeCount: 5},
            {id: 2, message: 'Hi', likeCount: 8},
            {id: 2, message: 'Hi', likeCount: 8},
            {id: 2, message: 'Hi', likeCount: 8},
        ],
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

export const addPost = (message: string)=>{
    let newPost={
        id: 5,
        message: message,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntierTree()
    console.log(state)
}