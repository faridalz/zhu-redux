import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { store } from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/navbar';
import Cart from './components/cart';
import Footer from './components/footer';


{/* <Router basename={ process.env.PUBLIC_URL + '/' }>
<App />
</Router> */}

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
          < Navbar />
          < Cart />
          <App />
          < Footer />
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


