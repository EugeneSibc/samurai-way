import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type MessageData = {
  id: number
  message: string
}
export type DialogsData = {
  id: number
  name: string
}
export type PostData = {
  id: number
  message: string
  likesCount: number
}

let dialogsData = [
  { id: 1, name: 'Dimytch' },
  { id: 2, name: 'Viktor' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Igor' },
]
let messageData = [
  { id: 1, message: 'Hello, how your IT-KAMASUTRA' },
  { id: 2, message: 'Its too difficult' },
  { id: 3, message: 'yov yov you' },
  { id: 4, message: 'Please let me in' },
]
let postData = [
  { id: 1, message: 'Hi Im there', likesCount: 5 },
  { id: 2, message: 'Its my first post', likesCount: 12 },
]

ReactDOM.render(
  <App dialogsData={dialogsData}
    messageData={messageData}
    postData={postData}
  />,
  document.getElementById('root')
);