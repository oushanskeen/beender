import React, {useState} from 'react';
//import '../css/Selection.css';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link, useParams } from 'react-router-dom';

let Selection = ({ selection, info, onNo, onYes}) => {
  console.log("info: ", info[0].description);
  let {beerId} = useParams();
  let essence = info.filter(e => e.id === beerId[1]);

  let [pic,setPic] = useState('');
  const handlePicImport = _pica => {
      import(`../images/beerPics/${_pica}.jpg`).then(res=>{
           setPic(res.default);
      });
  };
  handlePicImport(beerId[1]);

return (
    <div id="selection" className="SelectionBox">
        <div class="contentAreaBox">
            <div 
                id="selectedCard" 
                class="choicePicArea cell"
            >
           
            <img src={pic}/>

            </div>
            <div class="descrAreaBox">
                <div class="descrTextArea">
                    {info[beerId[1]].description}
                </div>
                <div class="descrButtonArea">
                    <Link 
                        to='/beender/choice' 
                        id='noButton' 
                        class="noChoiceButton cell"
                        onClick={()=>onNo()}
                    > 
                        NO 
                    </Link>
            
                    <Link 
                        to='/beender/order' 
                        id='yesButton' 
                        class="yesChoiceButton cell"
                        onClick={()=>onYes(beerId[1])}
                    > 
                        YES  
                    </Link>
                </div>
            </div>
        </div> 
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
