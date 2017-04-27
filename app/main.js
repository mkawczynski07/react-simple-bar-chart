import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.React = React;
window.ReactDOM = ReactDOM;

const render = () => ReactDOM.render(<App />, document.getElementById('root'));

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    const newApp = require('./App').default;
    render(newApp);
  });
}
