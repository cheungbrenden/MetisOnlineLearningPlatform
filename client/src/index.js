import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import Login from './Login';
import Homepage from './Homepage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="" element={<Login />} />
            <Route path="home" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
