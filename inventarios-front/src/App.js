import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import ListaArticulo from './components/admin/Articles';
import ListDocuments from './components/admin/Documents';
import ListSuppliers from './components/admin/Suppliers';
import Signup from './components/auth/Signup';
import Profile from './components/admin/Profile';
import ArticlesDetails from './components/admin/ArticlesDetails';

class App extends Component {
  state = {
    loggedInUser: null
  }

  getTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar userInSession={this.state.loggedInUser}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" render={() => <Signup getUser={this.getTheUser} />} />
          <Route exact path="/admin" component={Profile} />
          <Route exact path="/supervisor" component={Profile} />
    <Route exact path="/articles" render={()=> <div className="columns is-mobile login"><ListaArticulo/> </div>}/>
          <Route exact path="/documents" component={ListDocuments} />
          <Route exact path="/suppliers" component={ListSuppliers} />
          <Route exact path="/articles/:id" component={ArticlesDetails}/>
        </Switch>
      </div>
    );
  }
}


export default App;
