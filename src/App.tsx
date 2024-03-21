import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRootState } from './redux/redux-store';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { Dispatch } from 'redux';
import { UsersContainer } from './components/users/UsersContainer';

type AppProps = {
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile/>} />
          <Route path='/dialogs' render={() => <DialogsContainer/>} />
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/groups' />
          <Route path='/content' />
          <Route path='/news' />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
