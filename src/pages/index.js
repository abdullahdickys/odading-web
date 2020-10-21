import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login, Register, Home } from '../../pages';

const Routes = () => {
    return {
        <Router>
            <Switch>
                <Route>
                    <Login />
                </Route>
                <Route>
                    <Register />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Router>
    }
}