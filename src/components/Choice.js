import React, {useState} from 'react';
import '../App.css';
import { connect } from "react-redux";

let Choice = ({choice}) => {
  let [beerId,setBeerId] = useState('');
  let LoveItem = ({num}) => {
      let handleItemClick = () => {
           setBeerId(beerId = num);
           console.log('beerId :', beerId);
      };
      return <span onClick={handleItemClick}>#{num}<br/></span>;
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>You love: </p>
        <div id='choice'>
            {choice.map(e => <LoveItem num={e.id}/>)}
        </div>
        <p>
          You are in a world of chosen cards
        </p>
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  choice: state.gallery.filter(e => e.status==='Love')
});

export default connect(
  mapStateToProps
)(Choice);
