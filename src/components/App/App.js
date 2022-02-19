import 'bootstrap-css-only'
import './App.css';

import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Login from '../Form/Login/Login';
import Dashboard from '../Dashboard/Dashboard'
import Calculadora from '../Dashboard/Calculadora/Calculadora'
import Stats from '../Dashboard/Stats/Stats'
import PrivateRoute from '../PrivateRoute/PrivateRoute'



const App = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (userLogged !== null) {
      const loc =
        pathname !== '/login' && pathname !== '/'
          ? pathname
          : '/';
      navigate("/dashboard");
    }
  }, [userLogged, navigate, pathname]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
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
          path="/dashboard/calculadora"
          element={
            <PrivateRoute>
              <Calculadora />
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path="/dashboard/stats"
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
