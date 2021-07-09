import { TextInput } from 'carbon-components-react';

const Login = () => (
    <div className="login-container content-body bx--grid">
        <div className="bx--row">
            <div className="bx--col">
                <section>
                    <h1>Log in</h1>
                </section>
                <section>
                    <TextInput id="username" labelText="Username" name="username" className="login-input" />
                    <TextInput.PasswordInput id="password" labelText="Password" name="password" className="login-input" />
                </section>
            </div>
        </div>
    </div>
);

export default Login;