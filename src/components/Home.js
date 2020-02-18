import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { connect } from "react-redux";


let Home = ({hello,store}) => {
    
  return (
    <div className="App" onLoad={console.log('state : ', store)}>
      <header className="App-header" onLoad={console.log('hello in Home component: ', hello)}>
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
  //hello: state.home.then(res => console.log('res in mapState : ', res)),
  //hello: state.home.then(res => res),
  hello: state.home,
  store: state
});

//const mapDispatchToProps = (dispatch, id) => ({
//  onLove: id => dispatch(actions.love(id)),
//  onHate: id => dispatch(actions.hate(id)),
//});

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(Home);


//export default Home;
