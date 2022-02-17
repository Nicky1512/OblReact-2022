import Form from "../Form";
import { useDispatch } from "react-redux";
import { onUserLogged } from "../../../containers/App/actions";
import { onLogin } from "../../../services/serviceApi";

const Login = () => {
  const dispatch = useDispatch();
  const onLoginSubmit = async (userData) => {
    try {
      return await onLogin(userData);
    } catch (error) {
      alert(error.message);
    }
  };
  //   try {
  //    const data = await onLogin(userData);
  //    console.log(data);
  //     if (data.codigo !== 200){
  //         console.log(data.codigo);
  //         alert(data.mensaje);
  //     }else{
  //         //  Guardo al usuario en el storage / localstorage o sessionstorage
  //     // sessionStorage.setItem('myTodoAppUser', JSON.stringify(data))
  //   //   Invoco a mi componente padre (App) para enviarle los datos del usuario
  //       dispatch(onUserLogged(data))

  //     }

  //   } catch (error) {
  //     alert(error.message)
  //   }
  //  }

  return (
    <>
      <Form
        btnName="Login"
        linkText="No sos miembro?"
        linkTitle="Registrate!"
        onClick={onLoginSubmit}
      />
    </>
  );
};

export default Login;
