import App from './App';
import React from 'react';
import { render } from 'react-dom';
import './index.css';
const rootEl = document.getElementById('root');

render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(<NextApp />, rootEl);
  });
}
