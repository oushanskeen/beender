import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link, useParams } from 'react-router-dom';

let Selection = ({ selection, info, onNo, onYes}) => {
  console.log('me selection');
  console.log('info: ', info);
  console.log('selection: ', selection);
  let {beerId} = useParams();
  console.log('id: ', beerId);
  let Id = +beerId[1];
  console.log('Id: ', +Id);
  //console.log(typeof +Id);
  let essVis = info.map(e => e.id);
  console.log('essVis: ', essVis);
  //let essFilt = info.filter(e => e.id===`${Id}`);
  let essFilt = info.filter(e => e.id===Id);
  console.log('essFilt:', essFilt);
  let essence = info.filter(e => e.id === Id);
  console.log('essence: ', essence);
  //let essence = info.filter(e => e.id === selection.isSelected);
  //console.log('id: ', id);
  
  
  
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
            {console.log('Id : ', Id)}
            <Link to='/beender/order' id='yesButton' 
                onClick={()=>onYes(Id)}
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
