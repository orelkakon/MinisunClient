import React, { useState } from 'react';
import { notifyError, notifySuccees } from '../../App';
import { LoginPage, FullLogin, PasswordInput, UsernameInput, LoginButton, LogoImg } from './style'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const username = "idaninja"
    const password = "idaNinja"
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    let history = useNavigate();

    const movePage = (path) => {
        history(path)
    }
    const handleLogin = () => {
        if (username === user && password === pass) {
            localStorage.setItem("loggedIn", "1")
            notifySuccees("Successful login!")
            movePage("/controlPanel")
        }
        else {
            notifyError("Faild login!")
        }
    }

    return (
        <LoginPage>
            <LogoImg />
            <br />
            <FullLogin>
                <h2>Minisun Management</h2>
                <h3>Admin Login</h3>
                <UsernameInput placeholder="Username..." onChange={e => setUser(e.target.value)} />
                <br />
                <PasswordInput type="password" onChange={e => setPass(e.target.value)} placeholder="Password..." />
                <br />
                <LoginButton onClick={() => handleLogin()}>
                    Go!
            </LoginButton>
            <br/>
            </FullLogin>
        </LoginPage>
    );
};

export default Login;