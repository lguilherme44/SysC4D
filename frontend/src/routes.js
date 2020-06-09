import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './config/auth';

// Login
import Login from './pages/Login';

// Home
import Home from './pages/Home';

// Fornecedor
import EditarFornecedor from './pages/EditarFornecedor';
import AddFornecedor from './pages/AddFornecedor';

// Usuario
import EditarUsuario from './pages/EditarUsuario';
import AddUsuario from './pages/AddUsuario';

// Usuario
// import EditarCliente from './pages/EditarCliente';
import AddCliente from './pages/AddCliente';

// Registro
import Register from './pages/Register';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/home" component={Home} />

        <PrivateRoute path="/cliente/add" component={AddCliente} />

        <PrivateRoute path="/fornecedor/add" component={AddFornecedor} />
        <PrivateRoute
          path="/fornecedor/editar/:id"
          component={EditarFornecedor}
        />

        <PrivateRoute path="/usuario/add" component={AddUsuario} />
        <PrivateRoute path="/usuario/editar/:id" component={EditarUsuario} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
