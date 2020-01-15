import React from 'react';
import '../App.css';

function Gallery() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          You are in the Gallery
        </p>
            <div>
                <button id='hateButton'>Hate</button>
                <img id='beerPic' alt='beerPic'/>
                <button id='loveButton'>Love</button>
            </div>
            <div id='beerPicLog'>
                + - - - - - - 
            </div>
      </header>
    </div>
  );
}

export default Gallery;
