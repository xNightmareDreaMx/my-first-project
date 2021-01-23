import React from 'react'
import './App.css';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Nav from './componets/Nav';
import Profile from './componets/profile';

const App = () => {
  return (
    <div className='app-walpper'>
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
}


export default App;
