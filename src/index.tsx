import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppRootState, store } from './redux/redux-store';

export let rerenderEntireTree = (store:AppRootState, dispatch: (action:any)=>void) => {
  ReactDOM.render(
    <App store={store}
    //потеря контекста вызова
       dispatch={dispatch.bind(store)}
      
    />,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState(), store.dispatch)
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state, store.dispatch)
})