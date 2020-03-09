import React, {useState} from 'react';
import '../css/Gallery.css';
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
    
    const HateButton = () => (
    <div class="hateButtonBox cell">
        <div 
            id="hateButton" 
            class="hateButton cell"  
            onClick={
                ()=>handleHate(beerPic[count].id)
            }            
        > 
            Hate 
        </div>
    </div>
    );

    const Picture = () => (
        <div class="pictureAreaBox cell"> 
            <div 
                id='beerPic'
                class="pictureArea cell"
            > 
                {beerPic[count].id} :
                {beerPic[count].status} 
            </div>
        </div>
    );

    const LoveButton = () => (
        <div class="loveButtonBox cell">
            <div 
                id="loveButton" 
                class="loveButton cell"
                onClick={
                    ()=>handleLove(beerPic[count].id)
                }
            > 
                Love 
            </div>
        </div>
    );

    const StatusBar = () => (
        <div 
            id='beerPicLog'
            class="statusBar cell"
        >
            {idScope.map(e =>  e===count ? '+ ' : '- ')}
        </div>    
    );

    const SelectionLink = () => (
        <Link to="/beender/choice" >
            Goto Choice
        </Link>
    );

    const GalleryProcess = () => (
        <div class="GalleryBox">
            <HateButton/>
            <Picture/>
            <LoveButton/>
            <StatusBar/>
        </div>
    );
  return (
        <div id='gallery' >
            { count >= beerPic.length  
                ? <SelectionLink/>
                : <GalleryProcess/>  
            }       
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
