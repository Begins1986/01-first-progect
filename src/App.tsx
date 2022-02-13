import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile, {PostsType} from "./components/Profile/Profile";
import Dialogs, {DialogProps, MessageProps} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


type AppPropsType = {
    posts: Array<PostsType>
    dialogs: Array<DialogProps>
    messages: Array<MessageProps>
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
                            <Route path='/profile' element={<Profile posts={props.posts}/>}/>
                            {/*<Route path='/profile' element={() =><Profile posts={posts}/>}/>*/}
                            <Route path='/dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                            <Route path='/news' element={<Profile posts={props.posts}/>}/>
                            <Route path='/music' element={<Profile posts={props.posts}/>}/>
                            <Route path='/settings' element={<Profile posts={props.posts}/>}/>
                            {/*<Dialogs/>*/}
                            {/*<Profile/>*/}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
