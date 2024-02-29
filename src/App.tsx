import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';



export const App = () => {
  return (
    <div className="app-wrapper">
      Hello, samurai! Let's go!
      <Header />
      <Navbar />
      <div>
        Main content
      </div>
    </div>
  );
}

export default App;
