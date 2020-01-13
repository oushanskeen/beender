import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Some welcome text about where you are
        </p>
        <Link to="/gallery" className="App-link">Goto Gallery</Link>
      </header>
    </div>
  );
}

export default Home;
