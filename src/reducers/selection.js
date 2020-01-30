import {
  OUTCOME
} from '../constants/ActionTypes'

const initialState = (window.Cypress && window.initialState) || {outcome: " "};

export default function selected(state=initialState, action) {
  switch (action.type) {
    case OUTCOME:
      return[{outcome:action.id}];   
    default:
      return state
  }
};
