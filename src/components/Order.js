import React from 'react';
import '../css/Order.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from 'react-router-dom';

let Order = ({ gallery, outcome={isSelected:""}, onHome}) => {
  let order = gallery.filter(e => e.id===outcome.isSelected);
  return (
        <div 
            id="beerOrder"
            class="OrderBox"
        >
            <div class="yourBeerCaptionBox cell">
                YOUR BEER!
            </div>
            <div class="orderContentBox">
                <div class="orderPicArea cell">
                {
                    order[0] === undefined 
                    ? <p 
                        
                       >
                           Pardon, you chose nothing
                       </p>
                    : <p>
                        Your order:
                        {order[0].id}
                      </p>
                }
                </div>
            </div>
                <div class="orderButtonBox">
                    <Link 
                        to="/beender" 
                        id="homeButton"
                        class="orderHomeButton cell"
                        onClick={onHome}        
                    >
                        HOME
                    </Link>
                </div>
             
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
