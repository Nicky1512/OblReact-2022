import 'bootstrap-css-only'
import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Form/Login/Login';
import Dashboard from '../Dashboard/Dashboard'
import Calculadora from '../Dashboard/Calculadora/Calculadora'
import Stats from '../Dashboard/Stats/Stats'

import PrivateRoute from '../PrivateRoute/PrivateRoute'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';



const App = () => {
  const userLogged = useSelector((state) => state.userLogged);
  
  return (
    <div className="App">
      {userLogged ? <Dashboard />
        : <Login />}

    </div>
  );
}



/* const App = () => {
  const userLogged = useSelector((state) => state.userLogged);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (userLogged !== null) {
      const location =
        pathname !== '/login' && pathname !== '/'
          ? pathname
          : '/dashboard/list';
      navigate.push(location);
    }
  }, [userLogged]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="stats" element={<Stats />} />
        </Route>
      </Routes>
    </div>
  );
} */


export default App;
