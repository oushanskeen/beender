import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

let Selection = () => {
  let {id} = useParams();
  let Id = id[1];
  return (
    <div className="App">
      <header className="App-header">
        <p>You are in a world of your selections</p>
        <p id="selectedCard">You look at beer card # {Id}</p>
      </header>
    </div>
  );
};

export default Selection;
