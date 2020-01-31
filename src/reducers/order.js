import {
  HOME
} from '../constants/ActionTypes'

const initialState = (window.Cypress && window.initialState) || {outcome: " " };

export default function selected(state=initialState, action) {
    switch (action.type) {
        case HOME:
          return[{}];    
        default:
          return state
  }
};
