import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateDataType, store } from './redux/state';

export let rerenderEntireTree = (state:StateDataType) => {
    ReactDOM.render(
      <App store={store.getState()}
        dispatch = {store.dispatch.bind(store)}        
        />,
      document.getElementById('root')
    );
  }
  rerenderEntireTree(store.getState())
  store.subscribe(rerenderEntireTree)