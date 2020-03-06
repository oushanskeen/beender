import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../actions';

let Home = ({hello,store}) => {
      return (
        <div className="App">
          <header className="App-header">
            <p>
                Some welcome text about where you are
            </p>
            <Link 
                to="/beender/gallery" 
                className="App-link"
            >
                Goto Gallery
            </Link>
          </header>
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
