import {
  FETCH_HELLO_RESPONSE,
  FETCH_HELLO_REQUEST
} from '../constants/ActionTypes';
import * as actions from '../actions';
import {store} from '../index';
import axios from 'axios';

const emitFetchHelloRequest = () => dispatch => {
    axios.get('http://localhost:5000/hello')
    .then(res=>res.data)
    .then(message =>{
        //do whatever
        console.log('message after fetch : ', message);
        dispatch(actions.fetchHelloResponse(message));
    });
};

const initialState = (window.Cypress && window.initialState) || 
{message:"simple hello"};

export default function fetchHelloResponseReducer(
  state = initialState, action) {
  switch (action.type) { 
    case FETCH_HELLO_RESPONSE:
      return {welcome:action.data};
    case FETCH_HELLO_REQUEST:
      store.dispatch(emitFetchHelloRequest());
    default:
      return state
  }
};

