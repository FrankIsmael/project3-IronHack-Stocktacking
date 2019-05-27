
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ListaArticulo extends Component {

  state = { listaDeArticulos: []
            }

  getAllArticles = () => {
    axios.get(`http://localhost:5000/api/articles`)
      .then(responseFromApi => {
        this.setState({
          listaDeArticulos: responseFromApi.data
        })
      })
      .catch(err => { return err })
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render() {
    return (
      <>
          <table className="table column is-four-fifths">
            <thead>
            <tr>
              <th><abbr title="Position">Indice</abbr></th>
              <th>Articulo</th>
              <th><abbr title="Played">Existencia</abbr></th>
              <th><abbr title="Won">Costo</abbr></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
            <th><abbr title="Position">Indice</abbr></th>
              <th>Articulo</th>
              <th><abbr title="Played">Existencia</abbr></th>
              <th><abbr title="Won">Costo</abbr></th>
            </tr>
          </tfoot> 
          <tbody>
          {this.state.listaDeArticulos.map((article,i) => {
            return (
              <tr key={i}>
                <th>{i}</th>
                <td><Link to={`/articles/${article._id}`}>{article.nombre}</Link></td>
                <td>{article.existencia}</td>
                <td>{article.costo}</td>
              </tr>
                )
              })
              }
        </tbody>
        </table>
      </>
        )
      }
    }
    
    export default ListaArticulo;
             
            /**
            
<div key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <h3>Producto: {article.nombre}</h3>
                <h3>Costo: {article.costo}</h3>
                <h3>ImpuestoIVA: {article.impuestoIVA}</h3>
                <h3>ImpuestoIEPS: {article.impuestoIEPS}</h3>
                <h3>Existencia: {article.existencia}</h3>
                <h3>Unidad de Venta: {article.unidadVenta}</h3>
                <h3>Unidad de Compra: {article.unidadCompra}</h3>
                <h3>Unidades por Caja: {article.unidadesCaja}</h3>
                <h3>Proveedor: {article.proveedor.nombre}</h3>
              </Link><hr />
            </div>
            */
           
/**
 <div className="card" key={article._id}>
                <header className="card-header">
                  <p className="card-header-title">
                  {article.nombre}
                </p>
                </header>
                <div className="card-content">
                  <div className="content">
                  <h3>Costo: {article.costo}</h3>
                <h3>ImpuestoIVA: {article.impuestoIVA}</h3>
                <h3>ImpuestoIEPS: {article.impuestoIEPS}</h3>
                <h3>Existencia: {article.existencia}</h3>
                <h3>Unidad de Venta: {article.unidadVenta}</h3>
                <h3>Unidad de Compra: {article.unidadCompra}</h3>
                <h3>Unidades por Caja: {article.unidadesCaja}</h3>
                <h3>Proveedor: {article.proveedor.nombre}</h3>
                  </div>
                  </div>
                  <footer className="card-footer">
                    <a className="button is-primary card-footer-item" onClick={}>Edit</a>
                    <a className="button is-danger card-footer-item" onClick={}>Delete</a>
                  </footer>
                </div>
 */