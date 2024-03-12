import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateDataType, store } from './redux/state';

export let rerenderEntireTree = (state:StateDataType) => {
    ReactDOM.render(
      <App store={store.getState()}
        addPost={store.addPost.bind(store)}
        changePostText={store.changePostText.bind(store)}
        addMessage={store.addMessage.bind(store)} />,
      document.getElementById('root')
    );
  }
  rerenderEntireTree(store.getState())
  store.subscribe(rerenderEntireTree)