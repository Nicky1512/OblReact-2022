import 'bootstrap-css-only'
import './App.css';
import Login from '../Form/Login/Login';
import Dashboard from '../Dashboard/Dashboard'
import RouterLinks from '../RouterLinks/RouterLinks'

/* import Navbar from '../Header/Navbar/Navbar'; */

/* 
import { Route, Routes } from 'react-router-dom';
const { pathname } = '/';

useEffect(() => {
  if (userLogged !== null) {
    const location =
      pathname !== '/login' && pathname !== '/'
        ? pathname
        : '/dashboard/list';
    history.push(location);
  }
}, [userLogged]); */


const App = () => {
  return (
    <div className="App">
      <Login />
    
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
