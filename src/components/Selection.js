import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link, useParams } from 'react-router-dom';

let Selection = ({ selection, info=[{id:"1",status:'unknown'}], onNo, onYes}) => {
  let {beerId} = useParams();
  let essence = info.filter(e => e.id === beerId[1]);

  return (
    <div className="App">
      <header className="App-header">
        <p>You are in a world of your selections</p>
        <div id="selection">
            <p id="selectedCard">
                id: {essence[0].id}, 
                status: {essence[0].status}</p>
            <Link to='/beender/choice' id='noButton' 
                onClick={()=>onNo()}
            > 
                NO 
            </Link>
            <span> </span>
            <Link to='/beender/order' id='yesButton' 
                onClick={()=>onYes(beerId[1])}
            > 
                YES  
            </Link> 
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  selection: state.choice,
  info: state.gallery
});

const mapDispatchToProps = (dispatch,id) => ({
  onNo: () => dispatch(actions.deselect()),
  onYes: () => dispatch(actions.outcome(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection);
