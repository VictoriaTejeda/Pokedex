import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import pokemonReducer from './store/reducers/pokemonReducer';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

// eslint-disable-next-line no-mixed-operators
const composeAlt= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose

const composedEnhancers = composeAlt(applyMiddleware(thunk))

const store = createStore(pokemonReducer, composedEnhancers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store ={store}>
    <App />
  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
