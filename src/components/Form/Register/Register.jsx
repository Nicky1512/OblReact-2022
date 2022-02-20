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

  return (
    <>
      <LoginForm
        title="Registrate"
        btnName="Registrarse"
        linkText="Ya estás registrado?"
        link="/login"
        linkTitle="Ingresa con tu usuario!"
        onClick={onRegisterSubmit}
      />
    </>
  );
};

export default Register;
