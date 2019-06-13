import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/auth/Login';
import ListaArticulo from './components/admin/Articles';
import ListDocuments from './components/admin/Documents';
import ListSuppliers from './components/admin/Suppliers';
import Signup from './components/auth/Signup';
import Profile from './components/admin/Profile';


class Router extends Component {
  
  render(){
    return(
      <Switch>
    <Route exact path="/" render={() => <Home userInSes={this.state.loggedInUser} />}/>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" render={ () => <Signup getUser={this.getTheUser}/>} />
    <Route exact path="/admin" component={Profile} />
    <Route exact path="/supervisor" component={Profile} />
    <Route path="/admin/articles" component={ListaArticulo} />
    <Route path="/admin/documents" component={ListDocuments} />
    <Route path="/admin/suppliers" component={ListSuppliers} />
  </Switch>
    )
  }
}

export default Router
