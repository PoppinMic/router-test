import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './About';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
