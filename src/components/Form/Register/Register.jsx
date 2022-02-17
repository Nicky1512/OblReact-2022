import LoginForm from "../Form";
import { onRegister } from "../../../services/serviceApi";

const Register = () => {
  const onRegisterSubmit = async (userData) => {
    try {
      return await onRegister(userData);
    } catch (error) {
      alert(error.message);
    }
  };
  //     try {
  //      const data = await onRegister(userData)
  //   //   console.log("jsonResponse", data);
  //       if (data.codigo !== 200){
  //           console.log(data.codigo);
  //           alert(data.mensaje);
  //       }else{
  //           //  Guardo al usuario en el storage / localstorage o sessionstorage
  //       // sessionStorage.setItem('myTodoAppUser', JSON.stringify(data))
  //     //   Invoco a mi componente padre (App) para enviarle los datos del usuario
  //       //  dispatch(onUserLogged(data))
  //       }

  //     } catch (error) {
  //       alert(error.message)
  //     }
  //    }

  return (
    <>
      <LoginForm
        btnName="Registrar"
        linkText="Ya estás registrado?"
        linkTitle="Ingresa con tu usario!"
        onClick={onRegisterSubmit}
      />
    </>
  );
};

export default Register;
