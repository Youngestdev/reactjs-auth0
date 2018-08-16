import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Auth from './Auth/Auth';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const auth = new Auth();

ReactDOM.render(
  <BrowserRouter>
    <App auth={auth} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();