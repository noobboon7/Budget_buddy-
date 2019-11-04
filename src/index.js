import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider  } from 'react-redux';
import  store  from './store';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as serviceWorker from './serviceWorker';




ReactDOM.render(
 <Provider store = {store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
