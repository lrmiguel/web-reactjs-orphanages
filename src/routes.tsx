import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import AuthContext from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import { MenuProvider } from './contexts/MenuContext';

function Routes() {
    const { signed } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />

                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
                <Route path="/login" component={Login} />
                <Route path="/forgot_password" component={ForgotPassword} />
                <Route path="/reset_password" component={ResetPassword} />

                {(
                    signed &&
                    <MenuProvider>
                        <Route path="/dashboard" component={Dashboard} />
                    </MenuProvider>)
                    ||
                    <Redirect to="/" />
                }
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
