import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {PostsType} from "./components/Profile/Profile";
import Dialogs, {DialogProps, MessageProps} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export type AppPropsType = {
    state:{
        profilePage:{
            posts: Array<PostsType>
            newPost: string
        }
        messagePage: {
            dialogs: Array<DialogProps>
            messages: Array<MessageProps>
        }
    }
    addPost: ()=>void
    addNewPost: (newPost: string)=>void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className="content-block">
                    <Navbar/>
                    <div className="content">
                        <Routes>
                            <Route path='/profile' element={<Profile state={props.state.profilePage} addPost={props.addPost} addNewPost={props.addNewPost}/>}/>
                            {/*<Route path='/profile' element={<Profile posts={props.state.profilePage.posts}/>}/>*/}

                            {/*<Route path='/profile' element={() =><Profile posts={posts}/>}/>*/}
                            <Route path='/dialogs' element={<Dialogs state={props.state.messagePage} />}/>
                            <Route path='/news' element={<Profile state={props.state.profilePage} addPost={props.addPost} addNewPost={props.addNewPost}/>}/>
                            <Route path='/music' element={<Profile state={props.state.profilePage} addPost={props.addPost} addNewPost={props.addNewPost}/>}/>
                            <Route path='/settings' element={<Profile state={props.state.profilePage} addPost={props.addPost} addNewPost={props.addNewPost}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
