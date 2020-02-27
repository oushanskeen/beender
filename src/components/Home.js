import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { connect } from "react-redux";
import * as actions from '../actions';

let Home = ({hello,store}) => {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              {console.log('home store is', store)}
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
  //hello: state.home.then(res => console.log('res in mapState : ', res)),
  //hello: state.home.then(res => res),
  hello: state.home,
  store: state
});

//const mapDispatchToProps = dispatch => ({
//    onHello: (() => dispatch(thunkedFetchHello()))()
//});
const mapDispatchToProps = dispatch => ({
    // calling request forces response return
    onHello: dispatch(actions.fetchHelloRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);


//export default Home;
