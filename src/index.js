import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom';
import itunesReducer from './store/reducers/itunesStore'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//on peut combiné plusieurs reducer avec combineReducers
const rootReducer = combineReducers({
  IR: itunesReducer
})

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
