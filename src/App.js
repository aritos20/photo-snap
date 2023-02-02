import React from 'react';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-photos" element={<Favorites />} />
          </Routes>
        </div>
      <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
