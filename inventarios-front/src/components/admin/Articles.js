
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ListaArticulo extends Component {

  state = { listaDeArticulos: []
            }

  getAllArticles = () => {
    axios.get(`https://easystock.herokuapp.com/api/articles`)
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