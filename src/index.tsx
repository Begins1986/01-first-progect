import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: '"hello"', likeCount: 5},
    {id: 2, message: 'Hi', likeCount: 8},
    {id: 2, message: 'Hi', likeCount: 8},
    {id: 2, message: 'Hi', likeCount: 8},
]
let dialogs = [
    {id: 1, name: 'Sergey'},
    {id: 2, name: 'Stassy'},
    {id: 3, name: 'Angel'},
    {id: 4, name: 'Zahar'},
    {id: 5, name: 'Olya'},
    {id: 6, name: 'Kostya'},
]
let messages = [
    {id: 1, name: 'Hello'},
    {id: 2, name: 'Hi'},
    {id: 3, name: 'Yo'},
    {id: 4, name: 'Yo'},
    {id: 5, name: 'Yo'},
    {id: 6, name: 'Yo'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
