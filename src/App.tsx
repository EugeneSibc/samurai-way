import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppRootState } from './redux/redux-store';
import DialogsContainer from './components/dialogs/DialogsContainer';

type AppProps = {
  store: AppRootState
  dispatch: (action:any)=>void
}

export const App: React.FC<AppProps> = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile
            store={props.store}
            dispatch={props.dispatch}
          />} />
          <Route path='/dialogs' render={() => <DialogsContainer
            store={props.store} dispatch={props.dispatch}
             />} />
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
