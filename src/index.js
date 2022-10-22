import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router basename={ process.env.PUBLIC_URL + '/' }>
          <App />
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


