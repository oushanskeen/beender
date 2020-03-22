import React, {useState} from 'react';
//import '../css/Gallery.css';
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

    let [pic,setPic] = useState('');
    const handlePicImport = _pica => {
        import(`../images/beerPics/${_pica}.jpg`).then(res=>{
            setPic(res.default);
        });
    };
    //handlePicImport(beerId[1]);
    //{beerPic[count].id} :
    //{beerPic[count].status}

    const Welcome = () => (
        <div class="row galWelcRow">
            <div class="col">
                <div class="gslWelcBox ocell">
                    SELECT THE BEER!
                </div>
            </div>
        </div>
    );
 
    const Picture = () => (
        <div class="row galPicaRow"> 
            <div class="col">
                <div 
                    id='beerPic'
                    class="galPicaBox cell"
                > 
                    {handlePicImport(count+1)}
                    <img 
                        src={pic} 
                        alt="beerPic"
                        class="galImg"
                    />
                </div>
            </div>
        </div>
    );

    const HateButton = () => (
        <div 
            id="hateButton" 
            class="galHome bttn cell"  
            onClick={
                ()=>handleHate(beerPic[count].id)
            }            
        > 
            Hate 
        </div>
           
    );
    const LoveButton = () => (
        <div 
            id="loveButton" 
            class="galHome bttn cell"
            onClick={
                ()=>handleLove(beerPic[count].id)
            }
        > 
            Love 
        </div>
    );
    const Buttons = () => (
        <div class="row galButtonsRow">
            <div class="col">
                <div class="galButtonsBox">
                    <HateButton/>
                    <LoveButton/>
                </div>
            </div>
        </div>
    );

    const StatusBar = () => (
        <div class="row galCountRow">
            <div class="col">
                <div 
                    id='beerPicLog'
                    class="galCountBox ocell"
                >
                    {idScope.map(e =>  e===count ? '+ ' : '- ')}
                </div>
            </div>
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
        <div class="main">
            <Welcome/>
            <Picture/>
            <StatusBar/>
            <Buttons/>
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
