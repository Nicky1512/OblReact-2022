import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './containers/store';
import Dashboard from './components/Dashboard/Dashboard';
import Stats from './components/Dashboard/Stats/Stats';
import Calculadora from './components/Dashboard/Calculadora/Calculadora';
import Login from './components/Form/Login/Login';
import Register from './components/Form/Register/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route index element={<Login />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/calculadora" element={<Calculadora />} />
            <Route path="/stats" element={<Stats />} />
          </Route>
      </Routes>
    </BrowserRouter>,
  </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);


/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
          </Route>
        </Routes>
      </BrowserRouter>,
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
