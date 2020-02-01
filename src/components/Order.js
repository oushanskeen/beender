import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from 'react-router-dom';

let Order = ({ gallery, outcome={isSelected:""}, onHome}) => {
  let order = gallery.filter(e => e.id===outcome.isSelected);
  return (
    <div className="App">
      <header className="App-header">
        <div id="beerOrder">You seem ready to order
            {
                order[0] === undefined 
                ? <p>Pardon, you chose nothing</p>
                : <p>
                    Your order:
                    {console.log(order[0])}
                    {order[0].id}
                  </p>
            }
            <Link to="/beender" id="homeButton"
                onClick={onHome}        
            >
                HOME
            </Link>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
    gallery: state.gallery,  
    outcome: state.choice[0]
});

const mapDispatchToProps = (dispatch,id) => ({
  onHome: () => dispatch(actions.home()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
