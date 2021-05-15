import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  form: formReducer,
});
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);
