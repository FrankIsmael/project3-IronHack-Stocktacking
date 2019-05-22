import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AuthService from '../auth/auth-service';


const service = new AuthService() 

export default function ProfileAdmin() {
  const pages = ['about', 'contact', 'sitemap'];

  return (

    <>

      <Navbar pages={pages} />

      <section className="section">
        <h1>Bienvenido admin</h1>
        <Link to='/admin/articulos'>Ver Articulos</Link> <br />
        <Link to='/admin/Proveedores'>Ver Proveedoresss</Link> <br />
        <Link to='/admin/Documentos'>Ver Documents</Link> <br />
        <button className="has-text-danger" onClick={()=>{service.logout()}}>
            Logout
          </button>
      </section>
    </>
  )
}