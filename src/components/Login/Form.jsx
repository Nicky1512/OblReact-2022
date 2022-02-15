import { useRef } from 'react';
import './Login.css';

import { Form, Button, Container } from 'react-bootstrap';
/* import { Link } from 'react-router-dom'; */

const LoginForm = (props) => {

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
        <Container className="login">
            <h2>login</h2>
            <Form>
                <Form.Group className="login_fields">
                    <Form.Label>Username</Form.Label>
                    <Form.Control className="login_fields_input"
                        placeholder="Username"
                        ref={refUser}
                    />
                </Form.Group>
                <Form.Group className="login_fields" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="login_fields_input"
                        type="password"
                        placeholder="Password"
                        ref={refPass}
                    />
                </Form.Group>
                {/* {error && (
                    <Alert className="txt_login" style={{ color: '#e34444' }}>
                        {error}
                    </Alert>
                )} */}
                <Form.Group className="login_fields">
                    <Button className="submit">{props.btnName}</Button>
                </Form.Group>   
            </Form>
                <p className="txt_login">{props.linkText} <a href="http://tbd"> {props.linkTitle}</a></p>                    
        </Container>             
    )
}

export default LoginForm;