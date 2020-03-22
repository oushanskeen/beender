import React from 'react';
//import '../css/Home.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions';

const Home = ({hello,store}) => {
    return (
        <div class="main">
            <div class="row homeWelcRow">
                <div class="col">
                    <div class="homeWelcBox ocell">
                            This lil app aimed to help you
                            navigating in our fancy beer
                            forest.     
                    </div>
                </div>
            </div>
            <div class="row homeButtonsRow">
                <div class="col">
                    <div class="homeButtonsBox">
                        <Link 
                            to="/beender/gallery" 
                            class="goGallery bttn cell"
                        >
                            Go To Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
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
