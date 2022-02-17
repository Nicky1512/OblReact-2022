import 'bootstrap-css-only'
import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Login from '../Form/Login/Login';
import Dashboard from '../Dashboard/Dashboard'
import RouterLinks from '../RouterLinks/RouterLinks'

/* import Navbar from '../Header/Navbar/Navbar'; */

 
import { Route, Routes } from 'react-router-dom';





const App = () => {
  const userLogged = useSelector((state) => state.userLogged);

  const { pathname } = '/';

  // useEffect(() => {
  //   if (userLogged !== null) {
  //     const location =
  //       pathname !== '/login' && pathname !== '/'
  //         ? pathname
  //         : '/dashboard/list';
  //     history.push(location);
  //   }
  // }, [userLogged]); 


  return (
    <div className="App">
     {userLogged ? <Dashboard />
          : <Login />}
      
    </div>
  );
}



/* const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='form/login' exact>
          <Login />
        </Route>
        <RouterLinks path='/dashboard' component={Dashboard} />
      </Routes>
    </div>
  );
} 
*/

export default App;
