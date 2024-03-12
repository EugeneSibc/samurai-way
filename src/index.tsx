import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, changePostText, state, subscribe } from './redux/state';

export let rerenderEntireTree = () => {
    ReactDOM.render(
      <App state={state}
        addPost={addPost}
        changePostText={changePostText}
        addMessage={addMessage} />,
      document.getElementById('root')
    );
  }
  rerenderEntireTree()
  subscribe(rerenderEntireTree)