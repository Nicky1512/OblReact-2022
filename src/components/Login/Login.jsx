import { useRef } from "react";
import "./Login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const refUser = useRef(null);
  const refPass = useRef(null);

  // const onLoginSubmit = e => {
  //     e.preventDefault()

  //     const username = refUser.current.value
  //     const password = refPass.current.value

  //     // Validan los datos
  //     if (username === '' || password === '') {
  //       alert('Por favor ingresa los campos obligatorios')
  //     } else {
  //       onLogin({ user: username, pass: password })
  //     }
  //   }

  return (
    <section className="container">
      <div className="login">
        <h2>login</h2>
        <div className="login_body">
          <form>
            <div className="login_fields">
              <label htmlFor="inputEmail">
                <FontAwesomeIcon className="login_fields_icon" icon={faUser} />
              </label>
              <input
                className="login_fields_input from-control"
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
                className="login_fields_input form-control"
                type="password"
                placeholder="Password"
                ref={refPass}
              />
            </div>
            <div className="login_fields">
              <button className="btn_submit">Login</button>
            </div>
            <p className="txt_login">
              Not signed-in yet? <a className="a">Sign-in now</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
