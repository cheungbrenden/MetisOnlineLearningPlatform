import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (

      <div className="Login">

        <Form onSubmit={handleSubmit}>
          <h3 className="mb-3">Log In</h3>
          <Form.Group className="mb-3" size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
            <Button className="btn btn-primary btn-lg btn-block" block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
  );
}

export default Login;
