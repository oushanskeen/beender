import React from 'react';
//import '../css/Choice.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from 'react-router-dom';

let Choice = ({ isLoved, isSelected, onSelect}) => {
  return (
        <div id='choice' class="ChoiceBox">
            <div class="heartSignBox cell">HEART</div>
                <div class="selectionAreaBox cell">
                    <div class="picArea cell">
            {
                isLoved.map(e => 
                    <Link to={`/beender/choice/:${e.id}`} 
                        class="picItem cell"
                        onClick={()=>onSelect(e.id)}><p>{e.id}</p>
                    </Link>)
            }
            </div>
            </div>
        <p class="descriptionAreaBox cell"> You are in a world of chosen cards </p>
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
