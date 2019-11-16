import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Grommet } from 'grommet';

const myTheme = {
  global: {
    font: {
      family: 'HelveticaNeue, Roboto'
    },
    text: {
      color: 'white'
    },
    table: {
      size: 'large'
    }
  }
};

ReactDOM.render(
  <Grommet theme={myTheme}>
    <App />
  </Grommet>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
