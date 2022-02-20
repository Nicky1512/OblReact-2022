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
        title="Login"
        btnName="Login"
        linkText="No tenes cuenta?"
        link="/register"
        linkTitle="Registrate!"
        onClick={onLoginSubmit}
      />
    </>
  );
};

export default Login;
