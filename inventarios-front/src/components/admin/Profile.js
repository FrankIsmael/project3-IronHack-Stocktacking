import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service'
import toastr from 'toastr'
import AddDocument from './AddDocumentos';

const service = new AuthService()

export default class Profile extends Component {
  state = {
    file: ''
  }

  render() {
    return (
      <>
        <section className="hero is-light heroP">
    
        <div className="container">
          <h1>Bienvenido {localStorage.getItem('loggedUser').replace(/['"]+/g, '')}</h1>
          <Link to='/articles'>Articulos</Link> <br />
          <Link to='/suppliers'>Proveedoresss</Link> <br />
          <Link to='/documents'>Documents</Link> <br />

          <a
            className="button is-danger has-text-white"
            onClick={() => {
              service.logout();
              localStorage.clear()
              toastr.success('Successful logout');
            }}
            href="/"
          >
            Logout
          </a> <hr />        
        </div>
          
        </section>
        <div className="columns is-mobile loginb">
          <AddDocument />
        </div>


      </>
    )
  }
}

/**
 
 */



