import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from 'react-router-dom';

let Choice = ({ isLoved, isSelected, onSelect}) => {
  return (
    <div className="App">
      <header className="App-header"
           onLoad={console.log(isSelected)}
      >
        <p>You love: </p>
        <div id='choice'>
            {
                isLoved.map(e => 
                    <Link to={`/beender/choice/:${e.id}`} 
                        onClick={()=>onSelect(e.id)}><p>{e.id}</p>
                    </Link>)
            }
        </div>
        <p> You are in a world of chosen cards </p>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoved: state.gallery.filter(e => e.status==='Love'),
  isSelected: state.choice
});

const mapDispatchToProps = (dispatch, id) => ({
  onSelect: id => dispatch(actions.select(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
