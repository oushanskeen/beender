import React, {useState} from 'react';
import * as actions from '../actions';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {GlobalStyle,Container,Grid,AreaBox,ParamBox,TextBox,Text,Button,Img,link,naked} from '../css/style.js';

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

    const Welcome = () => (
        <AreaBox g={[2,2,3,5]}>
            <Text>
                SELECT THE BEER!     
            </Text>
        </AreaBox>
    );
    const Beerpic = () => (
        <AreaBox g={[3,2,7,5]}  style={naked}>
            {handlePicImport(count+1)}
            <Img id="beerPic" src={require(`../images/beerPics/${count+1}.jpg`)}/>
        </AreaBox>
    );
    const Beergame = () => (
        <AreaBox g={[7,2,9,5]} style={naked}>
            <ParamBox w={"100%"} h={"66.66%"}>
                <TextBox>
                    welcome : {beerPic[count].eval["welcome"]} <br/>
                    post-effect : {beerPic[count].eval["post-effect"]} <br/>
                    song : {beerPic[count].eval["song"]} <br/>
                </TextBox>
            </ParamBox>
            <ParamBox id="beerPicLog" w={"100%"} h={"33.33%"}> 
                {idScope.map(e =>  e===count ? '+ ' : '- ')} 
            </ParamBox>
        </AreaBox>
    );
    const HateButton = () => (
        <Button>
            <div 
                id="hateButton" 
                class="galHome bttn cell"  
                onClick={
                    ()=>handleHate(beerPic[count].id)
                }            
            > 
                Hate 
            </div>
        </Button>
           
    );
    const LoveButton = () => (
        <Button>
            <div 
                id="loveButton" 
                class="galHome bttn cell"
                onClick={
                    ()=>handleLove(beerPic[count].id)
                }
            > 
                Love 
            </div>
        </Button>
    );
    const ButtonsBox = () => (
        <AreaBox g={[9,2,10,5]} fd="row" style={naked}>
            <HateButton/>
            <LoveButton/>
        </AreaBox>
    );

    const SelectionLink = () => (
        <Grid>
        <AreaBox g={[2,2,10,5]}>
            <ParamBox>
                <Button>
                    <Link to="/beender/choice" style={link}>
                        GO TO SELECTION
                    </Link>
               </Button>
            </ParamBox>
        </AreaBox>
        </Grid>
    );
    const GalleryProcess = () => (
            <Grid>
                <Welcome/>
                <Beerpic/>
                <ButtonsBox/>
                <Beergame/>
            </Grid>
    );
    return (
        <div id='gallery'>
            <GlobalStyle/>
            <Container>
                    { count >= beerPic.length  
                        ? <SelectionLink/>
                        : <GalleryProcess/>  
                    }
            </Container>       
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
