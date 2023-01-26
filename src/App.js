import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Search from './components/Search';
import ButtonAppBar from './components/AppBar';
import RenderImages from './components/RenderImages';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Search />
      <RenderImages />
    </div>
  );
}

export default App;
