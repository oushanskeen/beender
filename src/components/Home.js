import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions';

let Home = ({hello,store}) => {
      return (
        <div class="HomeBox">
          <div class="HomeWelcomeText cell">
            <p>
                Some welcome text about where you are
            </p>
          </div>
          <div class="HomeGoToGalleryBox">
                <Link 
                    to="/beender/gallery" 
                    class="HomeGoToGalleryButton cell"
                >
                    Go To Gallery <pre> >>> </pre>
                </Link>
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
