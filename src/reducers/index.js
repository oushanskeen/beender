import { combineReducers } from 'redux';
import home from './home';
import gallery from './gallery';
import choice from './choice';
import selection from './selection';

const appReducer = combineReducers({
  home,
  gallery,
  choice,
  selection
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'HOME') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
