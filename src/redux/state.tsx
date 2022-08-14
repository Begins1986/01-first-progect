import {PostsType} from "../components/Profile/Profile";
import {DialogProps, MessageProps} from "../components/Dialogs/Dialogs";


export type StateType = {
        profilePage:{
            posts: Array<PostsType>
            newPost: string
        }
        messagePage: {
            dialogs: Array<DialogProps>
            messages: Array<MessageProps>
        }
}

export type StoreType = {
    _state:StateType
    _rerenderEntierTree: ()=>void
    addPost: ()=>void
    addNewPost: (newPost: string)=>void
    subscribe: (observer: ()=>void) =>void
    getState: ()=>StateType
}

export const store = {
    _state: {
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
        }
    },
    getState () {
        return this._state
    },
    _rerenderEntierTree (){
        console.log("yo")
    },
    addPost (){
        let newPost={
            id: 5,
            message: this._state.profilePage.newPost,
            likeCount: 0
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPost=''
        this._rerenderEntierTree()
        console.log(this._state)
    },
    addNewPost(newPost: string){
        this._state.profilePage.newPost = newPost
        this._rerenderEntierTree()
        console.log(this._state)
    },
    subscribe (observer: ()=>void) {
        this._rerenderEntierTree = observer
    }
}


// let rerenderEntierTree = () =>{
//     console.log("yo")
// }
//
// export const state: stateType = {
//     profilePage: {
//         posts: [
//             {id: 1, message: '"hello"', likeCount: 5},
//             {id: 2, message: 'Hi', likeCount: 8},
//             {id: 2, message: 'Hi', likeCount: 8},
//             {id: 2, message: 'Hi', likeCount: 8},
//         ],
//         newPost: ''
//     },
//     messagePage: {
//         dialogs: [
//             {id: 1, name: 'Sergey'},
//             {id: 2, name: 'Stassy'},
//             {id: 3, name: 'Angel'},
//             {id: 4, name: 'Zahar'},
//             {id: 5, name: 'Olya'},
//             {id: 6, name: 'Kostya'},
//         ],
//         messages: [
//             {id: 1, name: 'Hello'},
//             {id: 2, name: 'Hi'},
//             {id: 3, name: 'Yo'},
//             {id: 4, name: 'Yo'},
//             {id: 5, name: 'Yo'},
//             {id: 6, name: 'Yo'},
//         ],
//     },
// }

// export const addPost = ()=>{
//     let newPost={
//         id: 5,
//         message: state.profilePage.newPost,
//         likeCount: 0
//     }
//     state.profilePage.posts.unshift(newPost)
//     state.profilePage.newPost=''
//     rerenderEntierTree()
//     console.log(state)
// }

// export const addNewPost = (newPost: string)=>{
//     state.profilePage.newPost = newPost
//     rerenderEntierTree()
//     console.log(state)
// }

// export const subscribe = (observer: ()=>void) => {
//     rerenderEntierTree = observer
// }

