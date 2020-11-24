import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import './App.css';
import { App } from './components/App';
import { reducers } from './reducers';
import socket from './api';

const SITE_KEY = process.env.REACT_APP_API_KEY;

socket.on('connect', () => {
  socket.emit('subscribe', { siteKey: SITE_KEY });
});

socket.on('noSuchSiteKey', () => {
  console.log('Invalid site key');
  process.exit(1);
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)