import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      {/* <nav>
        <Link to="/">Inicio</Link>
        <Link to="/my-photos">My Photos</Link>
      </nav> */}
      <Search />
    </div>
  );
}

export default App;
