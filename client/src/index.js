import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import reportWebVitals from './reportWebVitals';
import Yourproduct from "./components/yourproduct/yourproduct";
import UploadFile from './components/UploadFile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dash from "./components/dashboard2";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/upload" element={<UploadFile />}/>
        <Route path="/dashboard" element={<Dash />}/>
        {/* <Route path="/yourproduct" element={<Yourproduct />}/> */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
