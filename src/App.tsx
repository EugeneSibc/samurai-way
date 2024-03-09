import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { StateDataType } from './redux/state';

type AppProps = {
  state: StateDataType
  addPost: (textMessage: string) => void
  addMessage: (textMessage: string) => void
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage}
            addPost={props.addPost}
          />} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
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
