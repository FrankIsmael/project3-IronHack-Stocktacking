import React, { Component } from 'react'
import axios from 'axios';

class ArticlesDetails extends Component {

    state = {
        provNombre:''
    }

    componentDidMount() {
        this.getSingleArticle()
    }

    getSingleArticle = () => {
        const {params} = this.props.match
        axios.get(`https://easystock.herokuapp.com/api/articles/${params.id}`)
            .then(response => {
                const article = response.data
                this.setState({...article})
                this.setState({provNombre : this.state.proveedor.nombre})
            })
            .catch(err => err)
    }

    deleteArticle = (id) => {
        const {params} = this.props.match
        axios.delete(`https://easystock.herokuapp.com/api/articles/${params.id}`)
        .then(response => {
            this.props.history.push('/articles')
        })
    }

    render() {
        return (
            <>
                <div className="card" key={this.state._id}>
                    <header className="card-header">
                        <p className="card-header-title">
                            {this.state.nombre}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <h3>Costo: {this.state.costo}</h3>
                            <h3>ImpuestoIVA: {this.state.impuestoIVA}</h3>
                            <h3>ImpuestoIEPS: {this.state.impuestoIEPS}</h3>
                            <h3>Existencia: {this.state.existencia}</h3>
                            <h3>Unidad de Venta: {this.state.unidadVenta}</h3>
                            <h3>Unidad de Compra: {this.state.unidadCompra}</h3>
                            <h3>Unidades por Caja: {this.state.unidadesCaja}</h3>
                            <h3>Proveedor: {this.state.provNombre}</h3>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <button className="button is-primary card-footer-item" >Edit</button>
                        <button className="button is-danger card-footer-item" onClick={()=> this.deleteArticle(this.state._id)}>Delete</button>
                    </footer>
                </div>
            </>
        )
    }
}


export default ArticlesDetails

/**
 codigoBarras: "0000001111100000"
costo: 20
createdAt: "2019-05-21T10:47:44.140Z"
existencia: 50
impuestoIEPS: 10
impuestoIVA: 15
nombre: "Cerveza"
proveedor: {_id: "5ce3d5c0ac6aff84923e0449", nombre: "Frank", rfc: "FF10", razonSocial: "tal x", direccion: "Ricarte 580", …}
unidadCompra: 15
unidadVenta: 10
unidadesCaja: 50
updatedAt: "2019-05-21T10:47:44.140Z"
_id: "5ce3d750ac6aff84923e044e"
 */