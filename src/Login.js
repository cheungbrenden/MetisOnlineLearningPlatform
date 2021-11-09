import logo from './logo.svg';

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';

import { login } from "./Database"

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [test, setTest] = useState(undefined);

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    login(username, password).then(uuid => setTest(uuid));
    event.preventDefault();
  }

  return (
      <div className="Login">
        <h1> {test} </h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
  );
}

export default Login;
