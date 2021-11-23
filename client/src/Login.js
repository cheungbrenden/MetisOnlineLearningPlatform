import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css';
import './FontsAndColors.css'
import { useCookies } from 'react-cookie';

import {login} from "./Database"

function Login() {
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [test, setTest] = useState(undefined);
    const navigate = useNavigate();
    const setCookie = useCookies(['user_uuid'])[1];

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        login(email, password).then(uuid => {
            console.log(uuid);
            if (uuid) {
                setCookie('user_uuid', uuid, {path: "/", secure: true});
                navigate('/home');
            }
            else
                setTest("Invalid login");
        });
        event.preventDefault();
    }

    document.title = "Metis Login";

    return (
        <div id="centerSpace" className="loginBackground" style={{
            gridTemplateColumns: "2fr 3fr",
            gridTemplateRows: "1fr 1fr",


        }}>
            <div style={{
                gridRow: 1,
                gridColumn: 2
            }}>
                <div id="info">
                    <h2 className="font-darkBlue">WELCOME to METIS</h2>

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
                    <h3 className="mb-3 font-darkBlue">Log In</h3>
                    <Form.Group className="mb-3" size="lg" controlId="email">
                        <Form.Label className="font-darkBlue">Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" size="lg" controlId="password">
                        <Form.Label className="font-darkBlue">Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button id="SignIn" className="font-darkBlue btn btn-lg btn-block" block size="lg" type="submit"
                            disabled={!validateForm()}>
                        Login
                    </Button>
                    <div id="SideButtons">
                        <Button id="CreateAccount" className="mt-3" block size="lg"
                                type="submit">
                            Create Account
                        </Button>
                        <Button id="ForgotCredentials" className="mt-3" block size="lg"
                                type="submit">
                            Forgot Password or Username
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
