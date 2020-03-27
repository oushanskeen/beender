import React from 'react';
import { connect } from "react-redux";
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GlobalStyle,Container,Grid,AreaBox,ParamBox,Text,Button,link,naked} from '../css/style.js';

const BeerGalleryBox = styled(ParamBox)`
    justify-content:flex-start; 
    padding:2vmin;   
`;
const SmallBeerImg = styled.img`
    width:auto;
    height:50vw;
    margin:2vmin;
`;

let Choice = ({store, isLoved, isSelected, onSelect}) => {
    console.log("is loved :", store);

    const Welcome = () => (
        <AreaBox g={[2,2,3,5]}>
            <Text> 
                CHOOSE ONE FOR DETAILS
            </Text>
        </AreaBox>
    );
    const SelectionGallery = () => (
        <AreaBox g={[3,2,9,5]} style={naked}>
            <BeerGalleryBox fd={"column"}> 
                {
                    isLoved.map(e => 
                        <Link to={`/beender/choice/:${e.id}`}
                            onClick={()=>onSelect(e.id)}>
                            <SmallBeerImg src={require(`../images/beerPics/${e.id}.jpg`)}/>
                        </Link>
                    )
                }
            </BeerGalleryBox>
        </AreaBox>
    );
    const Bottom = () => (
        <AreaBox g={[9,2,10,5]} style={naked}> 
            <Button>
            <Link 
                to="/beender/gallery"
                style={link}
                id="backToGalleryButton"
            >
                or back to gallery
            </Link>
        </Button>
        </AreaBox>
    );    

    return (
        <div id='choice'>
            <GlobalStyle/>
            <Container>
                <Grid>
                    <Welcome/>
                    <SelectionGallery/>
                    <Bottom/>
                </Grid>
            </Container>
        </div>
    );
};

const mapStateToProps = state => ({
  isLoved: state.gallery.filter(e => e.status==='Love'),
  isSelected: state.choice,
  store: state
});

const mapDispatchToProps = (dispatch, id) => ({
  onSelect: id => dispatch(actions.select(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
