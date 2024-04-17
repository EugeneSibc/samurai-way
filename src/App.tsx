import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import { DialogsContainer } from './components/dialogs/DialogsContainer';
import { UsersContainer } from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';

type AppProps = {
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId' render={() => <ProfileContainer/>} />
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
