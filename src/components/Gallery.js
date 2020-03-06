import React, {useState} from 'react';
import '../App.css';
import * as actions from '../actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

let Gallery = ({ onHate, beerPic, onLove }) => {
   let idScope = beerPic.map((e,i) => i);
   const [count,setCount] = useState(idScope[0]);
   let handleLove = _picId => {
        setCount(count+1);
        onLove(_picId)
    };
    let handleHate = _picId => {
        setCount(count+1);
        onHate(_picId)
    };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          You are in the Gallery
        </p>
        <div id='gallery'>
            { count >= beerPic.length  
                ? (
                    <div>
                        <Link 
                            to="/beender/choice"
                        >
                            Goto Choice
                        </Link>
                    </div>
                  ) 
                : (
                    <div>
                        <button 
                            id="hateButton" 
          onClick={()=>handleHate(beerPic[count].id)}            
                        > Hate </button>
                        <span id='beerPic'> {beerPic[count].id} : {beerPic[count].status} </span>
                        <button id="loveButton" 
                            onClick={()=>handleLove(beerPic[count].id)}
                        > Love </button>
                        <div id='beerPicLog'>{idScope.map(e =>  e===count ? '+ ' : '- ')}</div>
                    </div>
                  )
            }       
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  beerPic: state.gallery
});

const mapDispatchToProps = (dispatch, id) => ({
  onLove: id => dispatch(actions.love(id)),
  onHate: id => dispatch(actions.hate(id)),
  onFetchGallery: (() => dispatch(actions.fetchGallery()))()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
