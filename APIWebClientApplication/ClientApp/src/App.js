import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { AddOrder } from './components/AddOrder';
import { RemoveUser } from './components/RemoveUser';
import { RemoveOrder } from './components/RemoveOrder';
import { FetchUserData } from './components/FetchUserData';
import { FetchOrderData } from './components/FetchOrderData';
import { LoginUser } from './components/LoginUser';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/add-user' component={AddUser} />
        <Route path='/add-order' component={AddOrder} />
        <Route path='/fetch-user-data' component={FetchUserData} />
        <Route path='/fetch-order-data' component={FetchOrderData} />
        <Route path='/remove-user' component={RemoveUser} />
        <Route path='/remove-order' component={RemoveOrder} />
        <Route path='/login-user' component={LoginUser} />
        <Route path='/login_fail' render={() => <div>Credenciales Invalidas.. Intente de nuevo</div>} />
        <Route path='/login-success' render={() => <div>Acceso Exito!!!</div>} />
        <Route path='/user-not-found' render={() => <div>Usuario no esta en el sistema</div>} />
      </Layout>
    );
  }
}
