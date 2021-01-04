import React, { FC, useState } from "react";
import './login.css'
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap'

interface ILoginProps {
    loginHandler: Function
}

function Login({loginHandler}: ILoginProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <form style={{ textAlign: 'center' }}>
                <FormGroup controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button variant="primary" onClick={() => loginHandler(true)}>Login</Button>
            </form>
        </div>
    )
}

export default Login;
