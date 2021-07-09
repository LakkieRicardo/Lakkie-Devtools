import { Switch, Route } from 'react-router-dom';
import './style.scss';

import GlobalHeader from './global-header';
import Dashboard from './dashboard';
import Login from './login';

const App = () => (
    <>
        <GlobalHeader />
        <div style={{height: "3rem"}} />
        <Switch>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <section className="content-body">
                    <h1>Lakkie.net Devtools</h1>
                </section>
                <section className="content-body">
                    <h2>What is Devtools?</h2>
                    <p>Devtools is a web app which helps you manage all of your projects as a developer using Git repositories. Other features include invoice listing, note taking, and OAuth 2.0 integration. In simpler terms, Devtools is a way to collect all of your projects and details.</p>
                </section>
            </Route>
        </Switch>
    </>
);

export default App;