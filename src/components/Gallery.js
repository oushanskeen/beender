import React from 'react';
import '../App.css';
//import { Route, Switch } from 'react-router-dom';
import Counter from './Counter';

function Gallery() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You are in the gallery Gallery
        </p>
        <Counter/>
      </header>
    </div>
  );
}

export default Gallery;
