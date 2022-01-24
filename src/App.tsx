import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img className='logo' src="https://www.svgrepo.com/show/50992/xing-logo.svg" alt="logo"/>
            </header>
            <nav className='nav'>
                <div><a href="#">Profile</a></div>
                <div><a href="#">Messages</a></div>
                <div><a href="#">News</a></div>
                <div><a href="#">Music</a></div>
                <div><a href="#">Settings</a></div>
            </nav>
            <div className='content'>
                <div>
                    <img className='content_img'
                          src="https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?size=626&ext=jpg"
                          alt="img"/>
                </div>
                <div>
                    ava+description
                </div>
                <div>Post</div>
                <div>NewPost</div>

            </div>
        </div>
    );
}


export default App;
