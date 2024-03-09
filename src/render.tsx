import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateDataType, addMessage, addPost, state } from './redux/state';

export let rerenderEntireTree = (state:StateDataType) => {
  ReactDOM.render(
    <App state={state}  addPost={addPost} addMessage={addMessage}/>,
    document.getElementById('root')
  );
}