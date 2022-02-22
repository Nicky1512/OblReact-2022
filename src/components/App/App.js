import 'bootstrap-css-only'
import './App.css';

import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import Dashboard from '../Dashboard/Dashboard'
import Calculadora from '../Dashboard/Calculadora/Calculadora'
import Stats from '../Dashboard/Stats/Stats'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Err404 from '../Errors/Err404';



const App = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  //console.log(userLogged);

  useEffect(() => {
    if (userLogged !== null) {
      const loc =
      pathname !== '/login' && pathname !== '/' && pathname !== '/register'
      ? pathname
      : '/dashboard';
      navigate(loc);
    }
  }, [userLogged, navigate, pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Err404 />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path="/calculadora"
          element={
            <PrivateRoute>
              <Calculadora />
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path="/stats"
          element={
            <PrivateRoute>
              <Stats />
            </PrivateRoute>
          }
        >
        </Route>
      </Routes>
    </div>
  );
}


export default App;
