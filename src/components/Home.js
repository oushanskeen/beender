import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions';
import {GlobalStyle,Container,Grid,AreaBox,Text,Button,link,naked} from '../css/style.js';

const Welcome = () => (
    <AreaBox g={[2,2,6,5]} style={naked}>
        <Text m={"16vmin"}>
            This lil app aimed to help you
            navigating in our fancy beer
            forest.     
        </Text>
    </AreaBox>
);

const ButtonsBox = () => (
    <AreaBox g={[6,2,10,5]} fd="row">
        <Button>
            <Link 
                to="/beender/gallery"
                style={link}
            >
                GO TO GALLERY
            </Link>
        </Button>
    </AreaBox>
);

const Home = ({hello,store}) => {
    return (
        <div>
            <GlobalStyle/>
            <Container>
                <Grid>
                    <Welcome/>
                    <ButtonsBox/>
                </Grid>
            </Container>
        </div>
    )
};


const mapStateToProps = state => ({
  hello: state.home,
  store: state
});

const mapDispatchToProps = dispatch => ({
    onHello: dispatch(actions.fetchHelloRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
