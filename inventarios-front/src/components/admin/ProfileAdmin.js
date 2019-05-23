import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AuthService from '../auth/auth-service'
import toastr from 'toastr'
import AddDocument from './AddDocumentos';

const service = new AuthService()

export default class ProfileAdmin extends Component {
  state = {
    file: ''
  }


  render() {
    const pages = ['Home'];
    return (
      <>
        <Navbar pages={pages} />

        <section className="section">
          <h1>Bienvenido admin</h1>
          <Link to='/admin/articulos'>Ver Articulos</Link> <br />
          <Link to='/admin/Proveedores'>Ver Proveedoresss</Link> <br />
          <Link to='/admin/Documentos'>Ver Documents</Link> <br />

          <button
            className="has-text-danger" 
            onClick={() => {
              service.logout();
              localStorage.clear()
              toastr.success('Successful logout')
              return this.props.history.push('/Home')
            }}
          >
            Logout
          </button> <hr/>
          <AddDocument/>
        </section>
      </>
    )
  }
}


