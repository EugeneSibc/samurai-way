import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { DialogsData, MessageData, PostData } from '.';

type AppProps = {
  postData: PostData[]
  dialogsData: DialogsData[]
  messageData: MessageData[]
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => { return <Profile postData={props.postData} />} } />
          <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />} />
          <Route path='/users'  />
          <Route path='/groups'  />
          <Route path='/content' />
          <Route path='/news'  />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
