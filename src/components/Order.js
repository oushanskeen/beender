import React from 'react';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {GlobalStyle,Container,Grid,AreaBox,ParamBox,TextBox,Text,Button,Img,link,naked} from '../css/style.js';

let Order = ({ gallery, outcome, onHome}) => {
    const order = () => gallery.filter(e => e.id===outcome.isSelected);
    //console.log("order : ", order);

    const Welcome = () => (
        <AreaBox g={[2,2,3,5]}>
            <Text>
                ASK FOR THIS BEER     
            </Text>
        </AreaBox>
    );
    const BeerPic = () => (
        <AreaBox g={[3,2,9,5]} style={naked}>
            { (outcome == undefined) 
                ? <Text>seems you chose nothing</Text>
                : <Img src={require(`../images/beerPics/${order()[0].id}.jpg`)}/>
            }
        </AreaBox>
    );
    const HomeButton = () => (
        <AreaBox g={[9,2,10,5]} fd="row" style={naked}>
            <Button>
                <Link 
                    to="/beender" 
                    id="homeButton"
                    onClick={onHome} 
                    style={link}       
                >
                    Home
                </Link>
            </Button>
        </AreaBox>
    );

    return (
        <div id="beerOrder">
            <GlobalStyle/>
            <Container>
                <Grid>
                    <Welcome/>
                    <BeerPic/>
                    <HomeButton/>
                </Grid>
            </Container>
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
