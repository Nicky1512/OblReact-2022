import { useRef } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { onUserLogged } from "../../containers/App/actions";
import { useState } from "react";

import { Link } from "react-router-dom";

const Form = (props) => {
  const refUser = useRef(null);
  const refPass = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const onLoginSubmit = async (e) => {
    e.preventDefault();

    const username = refUser.current.value;
    const password = refPass.current.value;

    // Validan los datos
    if (username === "" || password === "") {
      setErrorMessage("Por favor ingresa los campos obligatorios");
    } else {
      const userData = { usuario: username, password: password };

      try {
        const data = await props.onClick(userData);

        if (data.codigo !== 200) {
          console.log(data.codigo);
          //alert(data.mensaje);
          setErrorMessage(data.mensaje);
         
        } else {
          localStorage.setItem("loggedUser", JSON.stringify(data));
          dispatch(onUserLogged(data));
        }
      } catch (error) {
        setErrorMessage("No se pudo completar la solicitud.");
        alert(error.message);
      }
    }
  };

  return (
    <section className="container">
      <div className="login">
        <h2>{props.title}</h2>
        <div className="login_body">
          <form>
            <div className="login_fields">
              <label htmlFor="inputEmail">
                <FontAwesomeIcon className="login_fields_icon" icon={faUser} />
              </label>
              <input
                className="login_fields_input"
                type="email"
                placeholder="Username"
                ref={refUser}
              />
            </div>
            <div className="login_fields">
              <label htmlFor="inputPassword">
                <FontAwesomeIcon className="login_fields_icon" icon={faKey} />
              </label>
              <input
                className="login_fields_input"
                type="password"
                placeholder="Password"
                ref={refPass}
              />
            </div>
            <div className="login_fields">
              <button onClick={onLoginSubmit} className="btn_submit">
                {props.btnName}
              </button>
            </div>
            <p className="txt_login">
              {props.linkText}
              <Link to={props.link} className="a pl-2">
                {props.linkTitle}
              </Link>
            </p>
          </form>
        </div>
        {errorMessage && <div className="alert alert-danger" role="alert"> {errorMessage} </div>}
      </div>
      
    </section>
  );
};

export default Form;
