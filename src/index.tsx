import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {addNewPost, addPost} from "./redux/state";

export const rerenderEntierTree = () =>{
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
            {/*<App posts={posts} dialogs={dialogs} messages={messages}/>*/}
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntierTree()

store.subscribe(rerenderEntierTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
