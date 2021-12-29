import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const appReducer = combineReducers({
  form,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
