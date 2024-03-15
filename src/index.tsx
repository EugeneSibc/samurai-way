import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateDataType } from './redux/store';
import { AppRootState, store } from './redux/redux-store';

export let rerenderEntireTree = (state: AppRootState) => {
  ReactDOM.render(
    <App store={store.getState()}
      dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})