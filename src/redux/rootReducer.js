import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import loginReducer from '../containers/user/reducers/loginReducer';
const rootReducer = combineReducers({
  // layoutReducer,
  form: formReducer,
});

const appReducer = (state, action) => {
  if (action.type === 'DO_LOGOUT_SUCCESS') {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;
