import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App';
import './assets/styles/index.scss';
import ErrorBoundary from './containers/pages/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.Fragment>
  </Provider>,

  document.getElementById('root'),
);
