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
        </Switch>
    </>
);

export default App;