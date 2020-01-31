import React from 'react';
import '../App.css';

let Order = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>You seem ready to order</p>
        <p id="beerOrder">Your order:</p>
        <button id="homeButton">HOME</button>
      </header>
    </div>
  );
};

export default Order;
