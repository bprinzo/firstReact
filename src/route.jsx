import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './components/auth'

import Nav from './components/nav';
import Wrapper from './components/wrapper';
import Body from './components/body';
import Register from './components/register';
import Home from "./components/home";
import LogIn from "./components/logIn"
import Logged from "./components/logged"

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                )
    }
    />
)

const LoggedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isAuthenticated() ? (
                <Redirect to={{ pathname: '/logged', state: { from: props.location }}}
                 />
            ) : (
                <Component {...props}  />
                )
    }
    />
)
const Routes = () => (
    <HashRouter>
        <Wrapper>
            <Nav />
        </Wrapper>
        <Switch>
            <PrivateRoute path="/logged" component={Logged}/> 
            <LoggedRoute path="/login" component={LogIn} />
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/body" component={Body} />
            <Route path="/register" component={Register} />
        </Switch>
    </HashRouter>
)
export default Routes;