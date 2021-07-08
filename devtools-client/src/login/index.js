import React from 'react';
import './style.scss';
import LNLogo from '../ln-logo';

const Login = () => (
    <div className="login-card">
        <div>
            <h1>Lakkie Devtools</h1>
            <input type="text" id="username" name="username" placeholder="Username" className="login-input" /><br />
            <input type="password" id="password" name="password" placeholder="Password" className="login-input" /><br />
            <input type="submit" /><br />
            <div className="login-ln-logo-spacer" />
            <LNLogo className="login-ln-logo" />
        </div>
    </div>
);

export default Login;