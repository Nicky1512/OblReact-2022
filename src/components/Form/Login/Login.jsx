import Form from "../Form";
//import { useDispatch } from "react-redux";
//import { onUserLogged } from "../../../containers/App/actions";
import { onLogin } from "../../../services/serviceApi";

const Login = () => {
 // const dispatch = useDispatch();
  const onLoginSubmit = async (userData) => {
    try {
      return await onLogin(userData);
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <>
      <Form
        btnName="Login"
        linkText="No tenes cuenta?"
        linkTitle="Registrate!"
        onClick={onLoginSubmit}
      />
    </>
  );
};

export default Login;
