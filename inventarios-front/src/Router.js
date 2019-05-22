import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/auth/Login';
import ProfileAdmin from './components/admin/ProfileAdmin';
import ListaArticulo from './components/admin/Articulos';


const Router = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin" component={ProfileAdmin} />
    <Route path="/admin/articulos" component={ListaArticulo} />
  </Switch>
)

export default Router
