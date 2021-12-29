import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './indexReducer';

let middleware;

if (process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(thunk);
} else {
  middleware = composeWithDevTools(applyMiddleware(thunk));
}

const store = createStore(reducers, middleware);

export default store;
