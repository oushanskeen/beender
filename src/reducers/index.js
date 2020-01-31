import { combineReducers } from 'redux';
import gallery from './gallery';
import choice from './choice';
import selection from './selection';

const rootReducer = combineReducers({
  gallery,
  choice,
  selection
})

export default rootReducer;
