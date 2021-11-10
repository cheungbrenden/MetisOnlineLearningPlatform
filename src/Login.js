import 'bootstrap/dist/css/bootstrap.min.css';
import './FontsAndColors.css'
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';

import {login} from "./Database"

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
        <div id="centerSpace" style={{
            gridTemplateColumns: "2fr 3fr",
            gridTemplateRows: "1fr 1fr",



        }}>
            <div style={{
                gridRow: 1,
                gridColumn: 2
            }}>
                <div id="info">
                    <h2 className="font-darkBlue;">WELCOME to METIS</h2>

                    <h1 className="font-lightBlue font-bold">Personalized Education For Every Student</h1>

                    <h3 className="font-darkBlue">Metis ensures every student has all of the resources required to
                        master their learning goals.</h3>

                </div>
            </div>
            <div className="Login" style={{
              gridRow: 2,
              gridColumn: 2
            }}>
                <h1> {test} </h1>

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
                    <Button className="btn btn-primary btn-lg btn-block" block size="lg" type="submit"
                            disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
