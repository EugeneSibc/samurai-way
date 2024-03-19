import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppRootState, store } from './redux/redux-store';
import { Dispatch } from 'redux';
import { Provider } from 'react-redux';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  );
}
rerenderEntireTree()
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree()
})