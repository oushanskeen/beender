import {
  SELECT
} from '../constants/ActionTypes'

const initialState = (window.Cypress && window.initialState) || {isSelected: " "};

export default function choice(state=initialState, action) {
  switch (action.type) {
    case SELECT:
      return[{isSelected:action.id}]; 
    default:
      return state
  }
};
