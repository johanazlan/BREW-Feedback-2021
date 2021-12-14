import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Event from './event_old';
import reportWebVitals from './reportWebVitals';
import Event from './event';

ReactDOM.render(
  <React.StrictMode>
    <Event/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
