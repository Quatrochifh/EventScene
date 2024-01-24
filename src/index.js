import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// css
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from '../src/Pages/Home/app.js';

const routing = (
  <Router>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();