import { useDispatch } from "react-redux";

import {onUserLogout} from '../../../containers/App/actions'


const Logout = () => {
 
const dispatch = useDispatch;    
const onHandleLogout = ()=>{

    localStorage.removeItem('loggedUser');
    dispatch(onUserLogout);
}

  return (
            <div>
             <button onClick={(onHandleLogout)} type="button" class="btn btn-link">Cerrar sesión</button>
            </div>
  );
};

export default Logout;
