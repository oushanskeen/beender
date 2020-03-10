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

    let [pic,setPic] = useState('');
    const handlePicImport = _pica => {
        import(`../images/beerPics/${_pica}.jpg`).then(res=>{
            setPic(res.default);
        });
    };
    //handlePicImport(beerId[1]);
    //{beerPic[count].id} :
    //{beerPic[count].status} 
    const Picture = () => (
        <div class="pictureAreaBox"> 
            <div 
                id='beerPic'
                class="pictureArea cell"
            > 
            {handlePicImport(count+1)}
                <img src={pic}/> 
                <div class="pictureAreaText">
                    WELCOME: 
                        {beerPic[count].eval["welcome"]}<br/>
                         <br/>
                    POST-EFFECT: 
                        {beerPic[count].eval["post-effect"]}<br/>
                         <br/>
                    SONG: 
                        {beerPic[count].eval["song"]}<br/>          
                </div>
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
        <div class="GalleryBox">
            
                <Link to="/beender/choice" class="selectionLink cell">
            
                    Goto Choice
         
                </Link>
           
        </div>
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
        <div id='gallery'>
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
