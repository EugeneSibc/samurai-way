import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';



export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
          <Route path='/users' component={Dialogs} />
          <Route path='/groups' component={Dialogs} />
          <Route path='/content' component={Dialogs} />
          <Route path='/news' component={Dialogs} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
