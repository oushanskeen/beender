import React from 'react';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link, useParams } from 'react-router-dom';
import {GlobalStyle,Container,Grid,AreaBox,ParamBox,TextBox,Text,Button,Img,link,naked} from '../css/style.js';

let Selection = ({ selection, info, onNo, onYes}) => {
    console.log("infoINFO: ", info);
    console.log("info: ", info[0].description);
    let {beerId} = useParams();
    let essence = info.filter(e => e.id === beerId[1]);
    console.log("essence : ", essence)

    const Welcome = () => (
        <AreaBox g={[2,2,3,5]}>
            <Text>
                BEER DETAILS XXX     
            </Text>
        </AreaBox>
    );
    const Beerpic = () => (
        <AreaBox g={[3,2,7,5]} style={naked}>
            {console.log("beerId",beerId[1])}
            <Img src={require(`../images/beerPics/${(beerId[1])}.jpg`)}/>
        </AreaBox>
    );
    const Beergame = () => (
        <AreaBox g={[7,2,9,5]} style={naked}>
            <ParamBox h={"100%"}>
                <TextBox h={"79%"}>
                    {info[beerId[1]-1].description}
                </TextBox>
            </ParamBox>
        </AreaBox>
    );
    const NoButton = () => (
        <Button>
            <Link 
                to='/beender/choice' 
                id='noButton' 
                onClick={()=>onNo()}
                style={link}
            > 
                no 
            </Link>
        </Button>
           
    );
    const YesButton = () => (
        <Button>
            <Link 
                to='/beender/order' 
                id='yesButton' 
                style={link}
                onClick={()=>onYes(beerId[1])}
    
            > 
                yes  
            </Link>
        </Button>
    );
    const ButtonsBox = () => (
        <AreaBox g={[9,2,10,5]} fd="row" style={naked}>
            <NoButton/>
            <YesButton/>
        </AreaBox>
    );

    return (
        <div id='gallery'>
            <GlobalStyle/>
            <Container>
                <Grid>
                    <Welcome/>
                    <Beerpic/>
                    <Beergame/>
                    <ButtonsBox/>
                </Grid>
            </Container>       
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
