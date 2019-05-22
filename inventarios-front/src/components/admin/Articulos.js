// components/projects/ProjectList.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ListaArticulo extends Component {
 
state = { listaDeArticulos: [] };
  

  getAllArticles = () =>{
    axios.get(`http://localhost:5000/api/articles`)
    .then(responseFromApi => {
      this.setState({
        listaDeArticulos: responseFromApi.data
      })
    })
    .catch(err => {return err} )
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listaDeArticulos.map( article => {
            return (
              <div key={article._id}>
                <Link to={`/articulos/${article._id}`}>
                  <h3>{article.nombre}</h3>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
        
        </div>
      </div>
    )
  }
}

export default ListaArticulo;

//<AddProject getData={() => this.getAllArticles()}/> {/* <== !!! */}