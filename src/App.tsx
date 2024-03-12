import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { StateDataType, StoreType } from './redux/state';

type AppProps = {
  store: StateDataType
  addPost: () => void
  addMessage: (textMessage: string) => void
  changePostText: (newText: string) => void
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            state={props.store.profilePage}
            addPost={props.addPost}
            changePostText={props.changePostText}
          />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.store.dialogsPage}
            addMessage={props.addMessage} />} />
          <Route path='/users' />
          <Route path='/groups' />
          <Route path='/content' />
          <Route path='/news' />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
