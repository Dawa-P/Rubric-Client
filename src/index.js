import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// imoprt from react-redux
import {legacy_createStore} from 'redux';
import {Provider} from 'react-redux';
// import {composeWithDevTools} from 'redux-devtools-extension';

//import from src/reducers/index.js
import rootReducer from './reducers';

//create redux store
const store = legacy_createStore(
    rootReducer, //root reducer function
    // composeWithDevTools() //Enhance with Redux DevTools extension
  );

//Wrapping React application with the Redux Provider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
// ReactDOM.render(<App />, document.getElementById('root'));