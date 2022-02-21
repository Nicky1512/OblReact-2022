import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { onUserLogout } from "../../../containers/App/actions";


const Logout = () => {
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const onHandleLogout = () => {
    localStorage.removeItem("loggedUser");
    dispatch(onUserLogout);
    navigate('/');
  };

  return (
    <div>
      <button
        onClick={onHandleLogout}
        type="button"
        className="btn btn-outline-primary"
      >
        Cerrar sesión
      </button>
    </div>
  );
};

export default Logout;
